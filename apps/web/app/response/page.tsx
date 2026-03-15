'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Mail, Phone, Building2, FileText, Calendar, Lock, Trash2, RefreshCw, LogOut } from 'lucide-react';

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setSubmissions([]);
    setFilterStage('all');
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative w-full max-w-md">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200/50">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-3 sm:p-4">
                  <Lock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent text-center mb-1 sm:mb-2">
              Responses
            </h1>
            <p className="text-slate-600 text-center mb-8 text-sm sm:text-lg">
              Access your form submissions securely
            </p>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2 sm:mb-3 uppercase tracking-wide">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 sm:py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg transition-all duration-300 hover:border-slate-300"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2 text-base sm:text-lg"
              >
                <Lock className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Unlock Dashboard</span>
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L11 6.414V15a1 1 0 11-2 0V6.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span>Your data is secure and encrypted</span>
              </p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-xs sm:text-sm">Questions? <a href="mailto:support@unidesk.in" className="text-blue-400 hover:text-blue-300 font-semibold">Contact Support</a></p>
          </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logout Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">Form Responses</h1>
            <p className="text-sm sm:text-base text-slate-600">Manage and track all form submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium transition-colors text-sm whitespace-nowrap"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Controls - Sort and Refresh */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-3">
            <label className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
              className="flex-1 sm:flex-none px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className="w-full sm:w-auto flex items-center gap-2 justify-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-medium transition-colors disabled:opacity-50 text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {/* Stage Filter Tabs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max sm:flex-wrap">
            {[
              { value: 'all', label: 'All', labelFull: 'All Leads', count: stageCounts.all, color: 'bg-slate-100 text-slate-800 border-slate-300 hover:border-slate-400' },
              { value: 'new', label: 'New', labelFull: 'New', count: stageCounts.new, color: 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:border-yellow-400' },
              { value: 'interested', label: 'Int.', labelFull: 'Interested', count: stageCounts.interested, color: 'bg-green-50 text-green-800 border-green-200 hover:border-green-400' },
              { value: 'not-interested', label: 'Not Int.', labelFull: 'Not Interested', count: stageCounts['not-interested'], color: 'bg-red-50 text-red-800 border-red-200 hover:border-red-400' },
              { value: 'callback', label: 'Callback', labelFull: 'Call Back', count: stageCounts.callback, color: 'bg-blue-50 text-blue-800 border-blue-200 hover:border-blue-400' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilterStage(tab.value)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap border-2 ${
                  filterStage === tab.value 
                    ? `${tab.color} ring-2 ring-offset-2 ring-offset-white` 
                    : `${tab.color} border-transparent`
                }`}
              >
                <span className="sm:hidden">{tab.label}</span>
                <span className="hidden sm:inline">{tab.labelFull}</span>
                <span className="ml-1 font-bold">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base">Loading submissions...</p>
          </div>
        ) : sorted.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 sm:p-12 text-center">
            <p className="text-slate-600 text-base sm:text-lg">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sorted.map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-slate-200">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                      {submission.first_name} {submission.last_name || ''}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {format(new Date(submission.created_at), 'MMM dd, yyyy • h:mm a')}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ${getFormTypeColor(submission.form_type)}`}>
                      {getFormTypeLabel(submission.form_type)}
                    </span>
                    <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap ${getStageColor(submission.stage)}`}>
                      {getStageLabel(submission.stage)}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-4 sm:px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    {/* Left Column */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Email */}
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Email</p>
                          <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline font-medium truncate text-sm">
                            {submission.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      {submission.phone && (
                        <div className="flex items-start gap-2 sm:gap-3">
                          <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Phone</p>
                            <a href={`tel:${submission.phone}`} className="text-green-600 hover:underline font-medium text-sm">
                              {submission.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Company */}
                      {submission.company && (
                        <div className="flex items-start gap-2 sm:gap-3">
                          <Building2 className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Company</p>
                            <p className="text-slate-900 font-medium truncate text-sm">{submission.company}</p>
                          </div>
                        </div>
                      )}

                      {/* Product */}
                      {submission.form_type === 'demo' && (
                        <div className="flex items-start gap-2 sm:gap-3">
                          <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Interested Product</p>
                            <p className="text-slate-900 font-medium text-sm">{getProductName(submission.product)}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Subject */}
                      {submission.subject && (
                        <div className="flex items-start gap-2 sm:gap-3">
                          <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Subject</p>
                            <p className="text-slate-900 font-medium truncate text-sm">{submission.subject}</p>
                          </div>
                        </div>
                      )}

                      {/* Date */}
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Submitted Date</p>
                          <p className="text-slate-900 font-medium text-sm">
                            {format(new Date(submission.created_at), 'MMM dd, yyyy')}
                          </p>
                          <p className="text-xs text-slate-600">
                            {format(new Date(submission.created_at), 'h:mm a')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="border-t border-slate-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 sm:mb-3">Message / Requirements</p>
                    <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200">
                      <p className="text-slate-800 whitespace-pre-wrap font-medium leading-relaxed text-sm">
                        {submission.message}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t border-slate-200 pt-3 sm:pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 sm:mb-3">Set Stage</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { value: 'new', label: '◐ New', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' },
                            { value: 'interested', label: '✓ Int.', labelFull: '✓ Interested', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
                            { value: 'not-interested', label: '✕ Not Int.', labelFull: '✕ Not Interested', color: 'bg-red-100 hover:bg-red-200 text-red-800' },
                            { value: 'callback', label: '☎ CB', labelFull: '☎ Call Back', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
                          ].map((btn) => (
                            <button
                              key={btn.value}
                              onClick={() => updateStage(submission.id, btn.value)}
                              disabled={updatingId === submission.id || submission.stage === btn.value}
                              className={`px-2 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${btn.color} ${
                                submission.stage === btn.value ? 'ring-2 ring-offset-2 ring-current' : ''
                              } ${updatingId === submission.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              <span className="sm:hidden">{btn.label}</span>
                              <span className="hidden sm:inline">{btn.labelFull || btn.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="flex items-center gap-2 justify-center sm:justify-start px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
                      >
                        <Trash2 className="w-4 h-4" />
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
