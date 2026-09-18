/**
 * RevU GEN - Interactive Landing Page Logic
 * Features:
 * 1. Live WhatsApp Review Simulator
 * 2. 200,000+ Authentic Review Bank Rotator & Live In-Place Editor
 * 3. App Showcase Tab Switcher
 * 4. FAQ Accordion Interaction
 * 5. Interactive Excel Parser Simulation
 * 6. Smooth Scroll & Direct WhatsApp Lead Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppHeroSimulator();
  initWorkflowSandbox();
  initAppShowcaseTabs();
  initFaqAccordion();
  initContactForm();
  initWatchDemoAction();
});

/* ==========================================================================
   1. HERO WHATSAPP SIMULATOR (Dynamic typing & auto-message updates)
   ========================================================================== */
function initWhatsAppHeroSimulator() {
  const typingIndicator = document.getElementById('hero-typing-indicator');
  const dynamicClinicBubble = document.getElementById('hero-clinic-bubble');

  if (!typingIndicator || !dynamicClinicBubble) return;

  // Subtle periodic typing pulse to bring the mockup to life
  setInterval(() => {
    typingIndicator.style.display = 'flex';
    setTimeout(() => {
      typingIndicator.style.display = 'none';
    }, 2400);
  }, 8000);
}

/* ==========================================================================
   2. AUTHENTIC REVIEW BANK & WORKFLOW SANDBOX SIMULATOR
   ========================================================================== */
const authenticReviewBank = [
  {
    specialty: "Dental Clinic",
    text: "Dr. Sharma made my root canal completely painless! The clinic is spotless, high-tech, and the staff is incredibly warm. Highly recommended!",
    author: "Neha Verma",
    rating: 5
  },
  {
    specialty: "Skin & Dermatology",
    text: "Remarkable experience! Within 3 weeks my acne scars cleared up significantly. The doctor gave genuine guidance without pushing unnecessary procedures.",
    author: "Rahul Kapoor",
    rating: 5
  },
  {
    specialty: "Orthopedic Care",
    text: "Best orthopedic surgeon in the city. Recovered from my knee pain faster than expected thanks to their dedicated physio rehabilitation plan.",
    author: "Col. Sanjeev Nair",
    rating: 5
  },
  {
    specialty: "Eye Hospital",
    text: "Got my Contoura Vision LASIK done yesterday. Today I have crystal clear 20/20 vision! Painless procedure and polite nurses throughout.",
    author: "Pooja Mehta",
    rating: 5
  },
  {
    specialty: "Pediatric Clinic",
    text: "The doctor is so gentle and patient with babies. Explains every diagnosis thoroughly and never over-prescribes antibiotics. Truly grateful!",
    author: "Ananya Deshmukh",
    rating: 5
  },
  {
    specialty: "Aesthetic & Hair Care",
    text: "Natural hair PRP results that exceeded my expectations. Transparent pricing, hygienic facility, and very supportive post-procedure care.",
    author: "Aman Singhania",
    rating: 5
  }
];

const templateBank = [
  "Dear {patient}, thank you for visiting {clinic}. Dr. {doctor} and our team would appreciate 30 seconds of your feedback on Google: {link}",
  "Hi {patient}, hope you are feeling better today! Could you please share your experience with Dr. {doctor} on our official Google page? Tap here: {link}",
  "Hello {patient}, your wellness is our top priority! If you were satisfied with your consultation today at {clinic}, please leave us a 5-star review: {link}",
  "Dear {patient}, Dr. {doctor} thanks you for trusting {clinic}. Help other patients find quality {specialty} care by sharing your review here: {link}",
  "Hi {patient}, greetings from {clinic}! Taking 15 seconds to review our service on Google helps our team keep delivering excellence: {link}"
];

function initWorkflowSandbox() {
  const clinicInput = document.getElementById('sim-clinic-name');
  const doctorInput = document.getElementById('sim-doctor-name');
  const specialtyInput = document.getElementById('sim-specialty');
  const templateCountSelect = document.getElementById('sim-template-count');
  const shuffleReviewBtn = document.getElementById('btn-shuffle-review');

  const previewMessage = document.getElementById('sim-preview-message');
  const previewReviewText = document.getElementById('sim-preview-review');
  const activeTemplateBadge = document.getElementById('sim-active-template-badge');

  if (!clinicInput || !previewMessage) return;

  let currentReviewIndex = 0;
  let currentTemplateIndex = 0;

  function updateSimulator() {
    const clinic = clinicInput.value.trim() || "Apex Care Clinic";
    const doctor = doctorInput.value.trim() || "Dr. Rajesh Sharma";
    const specialty = specialtyInput.value.trim() || "Dental & Orthodontics";
    const templateCount = parseInt(templateCountSelect.value, 10) || 3;

    // Pick from chosen template range
    const maxTemplates = Math.min(templateCount, templateBank.length);
    const selectedTemplate = templateBank[currentTemplateIndex % maxTemplates];

    const formattedMsg = selectedTemplate
      .replace(/{patient}/g, "Amit")
      .replace(/{clinic}/g, clinic)
      .replace(/{doctor}/g, doctor)
      .replace(/{specialty}/g, specialty)
      .replace(/{link}/g, "g.page/r/apex-care/review");

    previewMessage.innerHTML = formattedMsg;
    if (activeTemplateBadge) {
      activeTemplateBadge.textContent = `Using Template #${(currentTemplateIndex % maxTemplates) + 1} of ${maxTemplates}`;
    }

    const currentReview = authenticReviewBank[currentReviewIndex % authenticReviewBank.length];
    if (previewReviewText) {
      previewReviewText.textContent = `"${currentReview.text}"`;
    }
  }

  // Event Listeners for Live Inputs
  [clinicInput, doctorInput, specialtyInput, templateCountSelect].forEach(input => {
    if (input) {
      input.addEventListener('input', updateSimulator);
      input.addEventListener('change', updateSimulator);
    }
  });

  // Shuffle button
  if (shuffleReviewBtn) {
    shuffleReviewBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex + 1) % authenticReviewBank.length;
      currentTemplateIndex = (currentTemplateIndex + 1) % templateBank.length;
      
      const card = document.getElementById('sim-review-card-box');
      if (card) {
        card.classList.remove('card-shuffle-in');
        void card.offsetWidth; // Trigger reflow
        card.classList.add('card-shuffle-in');
      }
      updateSimulator();
    });
  }

  // Initial update
  updateSimulator();
}

/* ==========================================================================
   3. APP SHOWCASE TAB SWITCHER (Interactive Screens)
   ========================================================================== */
function initAppShowcaseTabs() {
  const tabButtons = document.querySelectorAll('.showcase-tab-btn');
  const screenPanels = document.querySelectorAll('.showcase-screen-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Update active button state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active screen panel
      screenPanels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const questionBtn = card.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close all cards for sleek accordion behavior
      faqCards.forEach(c => c.classList.remove('open'));

      // If clicked wasn't already open, open it
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   5. CONTACT FORM & DIRECT WHATSAPP INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('clinic-contact-form');
  const statusBanner = document.getElementById('form-status-banner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const clinicName = document.getElementById('form-clinic-name').value.trim();
    const doctorName = document.getElementById('form-doctor-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const specialty = document.getElementById('form-specialty').value;

    if (!clinicName || !phone) {
      alert("Please fill in your Clinic Name and WhatsApp Phone Number.");
      return;
    }

    // Compose customized WhatsApp message for immediate direct lead booking
    const encodedMessage = encodeURIComponent(
      `Hello RevU GEN Team! I'm interested in an automated WhatsApp Google review campaign for my clinic.\n\n` +
      `🏥 Clinic: ${clinicName}\n` +
      `👨‍⚕️ Doctor: ${doctorName || 'Doctor'}\n` +
      `🩺 Specialty: ${specialty}\n` +
      `📞 WhatsApp: ${phone}`
    );

    const waRedirectUrl = `https://api.whatsapp.com/send?phone=919016289684&text=${encodedMessage}`;

    if (statusBanner) {
      statusBanner.style.display = 'block';
      statusBanner.innerHTML = `
        <div style="background: #ECFDF5; border: 1.5px solid #10B981; border-radius: 10px; padding: 14px; margin-top: 14px; color: #065F46; font-weight: 700; font-size: 0.95rem;">
          🎉 Fantastic! Connecting your clinic details with RevU GEN on WhatsApp now...
        </div>
      `;
    }

    setTimeout(() => {
      window.open(waRedirectUrl, '_blank');
    }, 800);
  });
}

/* ==========================================================================
   6. INLINE LIVE EDIT HELPER FOR REVIEWS
   ========================================================================== */
window.editLiveReview = function(elementId) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const currentText = targetElement.textContent.replace(/^"|"$/g, '');
  const newText = prompt("Customize this authentic patient review to match your clinic:", currentText);

  if (newText && newText.trim() !== '') {
    targetElement.textContent = `"${newText.trim()}"`;
  }
};

/* ==========================================================================
   7. WATCH DEMO VIDEO ACTION (Scroll & Autoplay YouTube Embed)
   ========================================================================== */
function initWatchDemoAction() {
  const watchDemoBtns = document.querySelectorAll('a[href="#video-demo"]');
  const ytIframe = document.getElementById('revu-walkthrough-video');

  watchDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('video-demo');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (ytIframe && !ytIframe.src.includes('autoplay=1')) {
          ytIframe.src = "https://www.youtube-nocookie.com/embed/4fnJnOBp-u8?autoplay=1&rel=0&modestbranding=1&enablejsapi=1";
        }
      }
    });
  });
}
