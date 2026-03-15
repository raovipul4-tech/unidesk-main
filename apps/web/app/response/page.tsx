'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Mail, Phone, Building2, FileText, Calendar, ArrowUpDown } from 'lucide-react';

interface Submission {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string;
  form_type: string;
  product: string | null;
  created_at: string;
}

export default function ResponsePage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [filterType, setFilterType] = useState<'all' | 'contact' | 'demo'>('all');

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/responses');
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const filtered = submissions.filter(sub => 
    filterType === 'all' ? true : sub.form_type === filterType
  );

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const getProductName = (product: string | null) => {
    const productMap: { [key: string]: string } = {
      unicrm: 'Unidesk CRM',
      unichat: 'UniChat WhatsApp',
      both: 'Unidesk + UniChat',
    };
    return productMap[product || ''] || product || '—';
  };

  const getFormTypeLabel = (type: string) => {
    return type === 'contact' ? 'Contact Form' : 'Demo Request';
  };

  const getFormTypeColor = (type: string) => {
    return type === 'contact' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Form Responses</h1>
          <p className="text-slate-600">View all contact form and demo request submissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-slate-600 text-sm font-medium mb-2">Total Submissions</p>
            <p className="text-3xl font-bold text-slate-900">{submissions.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-slate-600 text-sm font-medium mb-2">Contact Forms</p>
            <p className="text-3xl font-bold text-blue-600">{submissions.filter(s => s.form_type === 'contact').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-slate-600 text-sm font-medium mb-2">Demo Requests</p>
            <p className="text-3xl font-bold text-green-600">{submissions.filter(s => s.form_type === 'demo').length}</p>
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">Filter by Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as 'all' | 'contact' | 'demo')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Submissions</option>
                <option value="contact">Contact Forms</option>
                <option value="demo">Demo Requests</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">Sort by Date</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        {sorted.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-slate-600 text-lg">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sorted.map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {submission.first_name} {submission.last_name || ''}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Submitted on {format(new Date(submission.created_at), 'MMM dd, yyyy • h:mm a')}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getFormTypeColor(submission.form_type)}`}>
                    {getFormTypeLabel(submission.form_type)}
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Email</p>
                          <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline font-medium">
                            {submission.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      {submission.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Phone</p>
                            <a href={`tel:${submission.phone}`} className="text-green-600 hover:underline font-medium">
                              {submission.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Company */}
                      {submission.company && (
                        <div className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Company</p>
                            <p className="text-slate-900 font-medium">{submission.company}</p>
                          </div>
                        </div>
                      )}

                      {/* Product (for demo requests) */}
                      {submission.form_type === 'demo' && (
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Interested Product</p>
                            <p className="text-slate-900 font-medium">{getProductName(submission.product)}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      {/* Subject */}
                      {submission.subject && (
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Subject</p>
                            <p className="text-slate-900 font-medium">{submission.subject}</p>
                          </div>
                        </div>
                      )}

                      {/* Date */}
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Submitted Date</p>
                          <p className="text-slate-900 font-medium">
                            {format(new Date(submission.created_at), 'MMMM dd, yyyy')}
                          </p>
                          <p className="text-xs text-slate-600">
                            {format(new Date(submission.created_at), 'h:mm a')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">Message / Requirements</p>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-slate-800 whitespace-pre-wrap font-medium leading-relaxed">
                        {submission.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
