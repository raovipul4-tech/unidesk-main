'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Mail, Phone, Building2, FileText, Calendar, Lock, Trash2 } from 'lucide-react';

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
  stage: string;
}

export default function ResponsePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStage, setFilterStage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Unidesk@1') {
      setIsAuthenticated(true);
      setPassword('');
      fetchSubmissions();
    } else {
      alert('Invalid password');
      setPassword('');
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const url = filterStage === 'all' 
        ? '/api/responses' 
        : `/api/responses?stage=${filterStage}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [filterStage]);

  const updateStage = async (id: number, newStage: string) => {
    setUpdatingId(id);
    try {
      const response = await fetch('/api/responses', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, stage: newStage }),
      });
      
      if (response.ok) {
        setSubmissions(submissions.map(sub => 
          sub.id === id ? { ...sub, stage: newStage } : sub
        ));
      }
    } catch (error) {
      console.error('Error updating submission:', error);
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteSubmission = async (id: number) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch('/api/responses', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      
      if (response.ok) {
        setSubmissions(submissions.filter(sub => sub.id !== id));
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

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

  const getStageColor = (stage: string) => {
    const colors: { [key: string]: string } = {
      new: 'bg-yellow-100 text-yellow-800',
      interested: 'bg-green-100 text-green-800',
      'not-interested': 'bg-red-100 text-red-800',
      'callback': 'bg-blue-100 text-blue-800',
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  const getStageLabel = (stage: string) => {
    const labels: { [key: string]: string } = {
      new: 'New',
      interested: 'Interested',
      'not-interested': 'Not Interested',
      'callback': 'Call Back',
    };
    return labels[stage] || stage;
  };

  // Login Page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 text-center mb-2">
            Responses
          </h1>
          <p className="text-slate-600 text-center mb-8">
            Enter password to view form submissions
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main Page
  const filtered = submissions.filter(sub => 
    filterStage === 'all' ? true : sub.stage === filterStage
  );

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const stageCounts = {
    all: submissions.length,
    new: submissions.filter(s => s.stage === 'new').length,
    interested: submissions.filter(s => s.stage === 'interested').length,
    'not-interested': submissions.filter(s => s.stage === 'not-interested').length,
    'callback': submissions.filter(s => s.stage === 'callback').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Form Responses</h1>
          <p className="text-slate-600">Manage and track all form submissions</p>
        </div>

        {/* Sort Option */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <label className="text-sm font-medium text-slate-700">Sort by Date:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
            className="ml-3 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading submissions...</p>
          </div>
        ) : sorted.length === 0 ? (
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
                  <div className="flex gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getFormTypeColor(submission.form_type)}`}>
                      {getFormTypeLabel(submission.form_type)}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStageColor(submission.stage)}`}>
                      {getStageLabel(submission.stage)}
                    </span>
                  </div>
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

                      {/* Product */}
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
                  <div className="border-t border-slate-200 pt-4 mb-4">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">Message / Requirements</p>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-slate-800 whitespace-pre-wrap font-medium leading-relaxed">
                        {submission.message}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">Set Stage</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { value: 'new', label: '◐ New', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' },
                            { value: 'interested', label: '✓ Interested', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
                            { value: 'not-interested', label: '✕ Not Interested', color: 'bg-red-100 hover:bg-red-200 text-red-800' },
                            { value: 'callback', label: '☎ Call Back', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
                          ].map((btn) => (
                            <button
                              key={btn.value}
                              onClick={() => updateStage(submission.id, btn.value)}
                              disabled={updatingId === submission.id || submission.stage === btn.value}
                              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${btn.color} ${
                                submission.stage === btn.value ? 'ring-2 ring-offset-2 ring-current' : ''
                              } ${updatingId === submission.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {updatingId === submission.id ? 'Updating...' : btn.label}
                            </button>
                          ))}
                        </div>
                      </div>\n                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className=\"flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium text-sm transition-colors whitespace-nowrap\"
                      >
                        <Trash2 className=\"w-4 h-4\" />
                        Delete
                      </button>
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
