import { useState } from 'react';
import { X, ShieldCheck, Mail, MapPin, Phone, AlertCircle, FileText } from 'lucide-react';

export default function LegalNoticeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('dmca');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-[#080a0f] border border-white/15 text-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#040507]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#A93207]" />
            <div>
              <h2 className="text-lg font-display uppercase tracking-wider font-bold text-white">
                LEGAL COMPLIANCE & DMCA DESIGNATED AGENT DISCLOSURE
              </h2>
              <p className="text-xs text-white/50 font-mono">
                COPPA, GDPR, CAN-SPAM, ROSCA &amp; DMCA SECTION 512(c) MANDATES
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Legal Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 font-mono text-xs overflow-x-auto bg-[#040507]">
          <button
            onClick={() => setActiveTab('dmca')}
            className={`px-4 py-2.5 rounded-t-xl font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'dmca' ? 'bg-[#A93207] text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            DMCA AGENT
          </button>
          <button
            onClick={() => setActiveTab('coppa')}
            className={`px-4 py-2.5 rounded-t-xl font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'coppa' ? 'bg-[#A93207] text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            COPPA &amp; AGE GATE
          </button>
          <button
            onClick={() => setActiveTab('subscription')}
            className={`px-4 py-2.5 rounded-t-xl font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'subscription' ? 'bg-[#A93207] text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            RENEWAL &amp; CANCEL TERMS
          </button>
          <button
            onClick={() => setActiveTab('canspam')}
            className={`px-4 py-2.5 rounded-t-xl font-bold uppercase transition-all cursor-pointer ${
              activeTab === 'canspam' ? 'bg-[#A93207] text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            CAN-SPAM &amp; PHYSICAL ADDRESS
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-white/80 leading-relaxed font-sans">
          {activeTab === 'dmca' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-display text-base font-bold text-white uppercase flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#A93207]" />
                  DMCA Designated Copyright Agent Registration (Section 512(c))
                </h3>
                <p className="text-xs text-white/70">
                  Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be submitted directly to our Designated Agent listed below:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold block uppercase">Designated Agent Name</span>
                  <p className="text-white font-bold text-sm">Hemchand Paunikar</p>
                  <p className="text-white/60">Registered DMCA Copyright Officer</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold block uppercase flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Physical Mailing Address
                  </span>
                  <p className="text-white font-medium">Hemchand Paunikar Design Studio</p>
                  <p className="text-white/60">Symbiosis Institute of Design Campus, VIP Road, Nagpur, MH 440001, India</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold block uppercase flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Electronic Mail Notice
                  </span>
                  <a href="mailto:hemchandrp21@gmail.com?subject=DMCA%20Takedown%20Notice" className="text-white underline font-bold hover:text-[#A93207]">
                    hemchandrp21@gmail.com
                  </a>
                  <p className="text-white/60">Subject: DMCA Takedown Notice</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold block uppercase flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Telephone Contact
                  </span>
                  <p className="text-white font-bold">+91 (0712) 255-0100</p>
                  <p className="text-white/60">Available Mon - Fri, 9am - 5pm IST</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-2">
                <span className="font-bold text-white uppercase block">Takedown Request Requirements:</span>
                <ul className="list-disc list-inside space-y-1">
                  <li>Physical or electronic signature of authorized copyright owner</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of material to be removed with exact URL location</li>
                  <li>Contact info (email, phone, address) of complaining party</li>
                  <li>Good faith statement that use is unauthorized</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'coppa' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-display text-base font-bold text-white uppercase flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#A93207]" />
                  COPPA Compliance &amp; Mandatory Age Verification Gate
                </h3>
                <p className="text-xs text-white/70">
                  This website strictly complies with the Children&apos;s Online Privacy Protection Act (COPPA). We do not knowingly collect, request, or maintain personal information from children under 13 years of age.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-3">
                <span className="font-bold text-white uppercase block text-sm">Age Gate Verification Mandate</span>
                <p>
                  All signup forms, inquiry portals, and subscriber interfaces feature a mandatory Age Verification Gate requiring users to confirm they are at least 13 years of age prior to submitting any personal credentials.
                </p>
                <p className="text-white/60">
                  If a parent or legal guardian discovers that a child under 13 has submitted personal information, contact our privacy team at <strong className="text-white">hemchandrp21@gmail.com</strong> for immediate deletion.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'subscription' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-display text-base font-bold text-white uppercase flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#A93207]" />
                  ROSCA &amp; FTC Subscription Renewal &amp; Cancellation Disclosures
                </h3>
                <p className="text-xs text-white/70">
                  In compliance with the Restore Online Shoppers&apos; Confidence Act (ROSCA) and FTC Rule 16 CFR Part 425:
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-3 font-mono">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[#A93207] font-bold uppercase block">Automatic Renewal Terms</span>
                  <p className="text-white/80 pt-1">
                    Design retainer subscriptions auto-renew on a monthly recurring basis at the stated billing frequency until explicitly cancelled.
                  </p>
                </div>

                <div>
                  <span className="text-[#A93207] font-bold uppercase block">1-Click Simple Cancellation Instructions</span>
                  <p className="text-white/80 pt-1">
                    You may cancel your recurring subscription at any time without penalty or hidden cancellation fees. To cancel:
                  </p>
                  <ol className="list-decimal list-inside text-white/70 pt-2 space-y-1">
                    <li>Email <strong className="text-white font-bold">hemchandrp21@gmail.com</strong> with subject line <strong className="text-white">&quot;CANCEL SUBSCRIPTION&quot;</strong></li>
                    <li>Or click the <strong className="text-white">Unsubscribe / Cancel</strong> link in any subscription confirmation notice.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'canspam' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h3 className="font-display text-base font-bold text-white uppercase flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#A93207]" />
                  CAN-SPAM Act Compliance &amp; Physical Postal Disclosure
                </h3>
                <p className="text-xs text-white/70">
                  We maintain strict adherence to the CAN-SPAM Act (15 U.S.C. 7701 et seq.) and global email distribution regulations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold uppercase block">Physical Postal Address</span>
                  <p className="text-white font-bold">Hemchand Paunikar Design Studio</p>
                  <p className="text-white/60">Symbiosis Institute of Design Campus, VIP Road</p>
                  <p className="text-white/60">Nagpur, MH 440001, India</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[#A93207] font-bold uppercase block">Unsubscribe Mechanism</span>
                  <p className="text-white/80">Every commercial &amp; marketing transmission includes a direct 1-click unsubscribe option.</p>
                  <a
                    href="mailto:hemchandrp21@gmail.com?subject=Unsubscribe%20Request"
                    className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-[#A93207] text-white font-bold hover:bg-[#892400] transition-colors"
                  >
                    Unsubscribe Email Request
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#040507] flex items-center justify-between font-mono text-xs">
          <span className="text-white/40">Registered Officer: Hemchand Paunikar</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white text-black font-bold uppercase hover:bg-white/80 transition-colors cursor-pointer"
          >
            ACCEPT &amp; CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
