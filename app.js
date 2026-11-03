"use strict";

const config = window.SITE_CONFIG;
const messages = {
  en: {
    headerNote: "Made for your next discovery", footerBrand: "Yangon Maps · Your city, at your fingertips.", footerDemo: "Static demo · Map and payment details are placeholders.",
    eyebrow: "A little direction. A lot to discover.", heroLine1: "Explore Yangon.", heroLine2: "Find your own way.", heroCopy: "From familiar streets to new discoveries, pick the map for your next journey.",
    freeEdition: "THE FREE EDITION", paidEdition: "THE PAID EDITION", illustration: "Illustrative demo map", mapAlt: "Illustrative blue and white Yangon map preview", paidMapAlt: "Illustrative premium Yangon map preview",
    freeTitle: "Free Yangon Map", paidTitle: "Paid Yangon Map", freePrice: "Free", freeDescription: "A simple start to exploring the city. Get the free map and take a little Yangon with you.", paidDescription: "Your next step starts here. Pay with KPay and request delivery of the paid map.",
    freeFeature1: "Sample city map", freeFeature2: "Instant download, no sign-up", freeFeature3: "Save it to your phone or computer", paidFeature1: "Pay with KPay QR or phone number", paidFeature2: "Payment reviewed by an admin", paidFeature3: "Map sent to your phone and email",
    downloadNow: "Download for free now", buyNow: "Buy now", freeFootnote: "Yours to download. No payment needed.", paidFootnote: "Sample price · Delivery after payment confirmation", stripDownload: "A map to keep", stripPayment: "Simple KPay payment", stripLanguage: "English & Myanmar", back: "Back to maps",
    checkoutEyebrow: "A FEW STEPS TO YOUR MAP", checkoutTitle: "Your Yangon journey starts here.", checkoutSubtitle: "Pay with KPay, then leave your details for map delivery.", paymentTitle: "Payment details", qrPlaceholder: "Your KPay QR goes here", qrDemo: "DEMO PLACEHOLDER · NOT A PAYMENT QR", phoneLabel: "KPay phone number", copy: "Copy", copied: "Copied!", copyFailed: "Please select and copy the phone number manually.", phonePlaceholder: "Replace the placeholder with a real KPay number in config.js first.", accountLabel: "Account name", accountPlaceholder: "Your account name", noticeTitle: "A note about delivery",
    deliveryTitle: "Where should we send your map?", formIntro: "Enter your contact details for the delivery request.", nameLabel: "Full name", namePlaceholder: "Your name", customerPhone: "Phone number", phoneHelp: "Use a number where the admin can reach you.", emailLabel: "Email address", transactionLabel: "KPay transaction ID (optional)", transactionPlaceholder: "Enter a reference, if available", formDemo: "Demo only. This form previews your request; it does not send or save your details, verify payment, or deliver a map.", submit: "Preview delivery request", successTitle: "Your demo request is ready.", successBody: "Your details passed validation. Nothing has been sent or saved. On a live website, the admin would review the payment before sending your map.", edit: "Edit details", invalidPhone: "Enter a valid phone number with 7–15 digits. Spaces, +, brackets, and hyphens are allowed.", invalidName: "Please enter your name.",
    downloadEyebrow: "A LITTLE YANGON, TO GO", downloadTitle: "Your free map is on its way.", downloadCopy: "Your download should start automatically. If it doesn't, use the button below.", downloadAgain: "Download free map", downloadDemo: "This is an illustrative SVG demo map, not a navigation map. Replace it with your own map file before launch.", explorePaid: "Explore the paid map →",
    homeTitle: "Explore your city", checkoutPageTitle: "KPay checkout", downloadPageTitle: "Your free map",
  },
  my: {
    headerNote: "သင့်ခရီးစဉ်အတွက် အဖော်မွန်", footerBrand: "Yangon Maps · သင့်လက်ထဲက ရန်ကုန်မြို့", footerDemo: "နမူနာဝက်ဘ်ဆိုက် · မြေပုံနှင့် ငွေပေးချေမှုအချက်အလက်များသည် နမူနာများဖြစ်ပါသည်။",
    eyebrow: "မြေပုံတစ်ခုနှင့်အတူ မြို့ကို ရှာဖွေလိုက်ပါ", heroLine1: "ရန်ကုန်မြို့ကို လေ့လာပါ။", heroLine2: "သင့်လမ်းကို ရှာဖွေပါ။", heroCopy: "ရင်းနှီးပြီးသား လမ်းများမှ နေရာသစ်များအထိ သင့်ခရီးစဉ်အတွက် သင့်တော်သည့် မြေပုံကို ရွေးချယ်ပါ။",
    freeEdition: "အခမဲ့ မြေပုံ", paidEdition: "အခပေး မြေပုံ", illustration: "နမူနာ သရုပ်ဖော်မြေပုံ", mapAlt: "အပြာနှင့် အဖြူရောင် ရန်ကုန်နမူနာမြေပုံ", paidMapAlt: "အခပေး ရန်ကုန်မြေပုံ နမူနာ",
    freeTitle: "အခမဲ့ ရန်ကုန်မြေပုံ", paidTitle: "အခပေး ရန်ကုန်မြေပုံ", freePrice: "အခမဲ့", freeDescription: "ရန်ကုန်မြို့ကို စတင်လေ့လာရန် အခမဲ့မြေပုံကို ဒေါင်းလုဒ်လုပ်ပြီး သင်နှင့်အတူ ယူဆောင်သွားပါ။", paidDescription: "KPay ဖြင့် ငွေပေးချေပြီး အခပေးမြေပုံ ပို့ဆောင်ပေးရန် တောင်းဆိုနိုင်ပါသည်။",
    freeFeature1: "မြို့မြေပုံ နမူနာ", freeFeature2: "အကောင့်ဖွင့်စရာမလိုဘဲ ချက်ချင်းရယူနိုင်သည်", freeFeature3: "ဖုန်း သို့မဟုတ် ကွန်ပျူတာတွင် သိမ်းဆည်းနိုင်သည်", paidFeature1: "KPay QR သို့မဟုတ် ဖုန်းနံပါတ်ဖြင့် ပေးချေနိုင်သည်", paidFeature2: "Admin မှ ငွေပေးချေမှုကို စစ်ဆေးပေးမည်", paidFeature3: "ဖုန်းနှင့် အီးမေးလ်သို့ မြေပုံပို့ပေးမည်",
    downloadNow: "အခမဲ့ ဒေါင်းလုဒ်လုပ်ရန်", buyNow: "ယခု ဝယ်ယူရန်", freeFootnote: "ငွေပေးချေစရာမလိုဘဲ ရယူနိုင်ပါသည်။", paidFootnote: "နမူနာဈေးနှုန်း · ငွေလက်ခံရရှိကြောင်း အတည်ပြုပြီးမှ ပို့ပေးမည်", stripDownload: "သိမ်းဆည်းထားနိုင်သော မြေပုံ", stripPayment: "လွယ်ကူသော KPay ငွေပေးချေမှု", stripLanguage: "အင်္ဂလိပ်နှင့် မြန်မာ", back: "မြေပုံများသို့ ပြန်သွားရန်",
    checkoutEyebrow: "မြေပုံရယူရန် အဆင့်အနည်းငယ်သာ", checkoutTitle: "သင့်ရန်ကုန်ခရီးစဉ်ကို စတင်လိုက်ပါ။", checkoutSubtitle: "KPay ဖြင့် ပေးချေပြီး မြေပုံပို့ပေးရန် သင့်အချက်အလက်များကို ဖြည့်ပါ။", paymentTitle: "ငွေပေးချေမှု အချက်အလက်", qrPlaceholder: "သင့် KPay QR ကို ဤနေရာတွင် ထည့်ပါ", qrDemo: "နမူနာသာဖြစ်သည် · ငွေပေးချေရန် QR မဟုတ်ပါ", phoneLabel: "KPay ဖုန်းနံပါတ်", copy: "ကူးယူရန်", copied: "ကူးယူပြီးပါပြီ", copyFailed: "ဖုန်းနံပါတ်ကို ရွေးချယ်ပြီး ကိုယ်တိုင်ကူးယူပေးပါ။", phonePlaceholder: "config.js တွင် KPay ဖုန်းနံပါတ်အမှန်ကို ဦးစွာထည့်ပေးပါ။", accountLabel: "အကောင့်အမည်", accountPlaceholder: "သင့်အကောင့်အမည်", noticeTitle: "မြေပုံပို့ဆောင်ခြင်းဆိုင်ရာ အသိပေးချက်",
    deliveryTitle: "မြေပုံပို့ပေးရန် အချက်အလက်", formIntro: "မြေပုံပို့ပေးရန် ဆက်သွယ်ရမည့် အချက်အလက်များကို ဖြည့်ပါ။", nameLabel: "အမည်", namePlaceholder: "သင့်အမည်", customerPhone: "ဖုန်းနံပါတ်", phoneHelp: "Admin ဆက်သွယ်နိုင်သည့် ဖုန်းနံပါတ်ကို ထည့်ပါ။", emailLabel: "အီးမေးလ်လိပ်စာ", transactionLabel: "KPay ငွေလွှဲမှတ်တမ်းနံပါတ် (မဖြည့်လည်းရပါသည်)", transactionPlaceholder: "ရှိပါက ငွေလွှဲမှတ်တမ်းနံပါတ်ကို ထည့်ပါ", formDemo: "နမူနာသာဖြစ်ပါသည်။ ဤဖောင်သည် ဖြည့်ထားသည့် အချက်အလက်များကို မပို့ပါ၊ မသိမ်းဆည်းပါ။ ငွေပေးချေမှုကို အတည်မပြုသလို မြေပုံလည်း မပို့ပေးပါ။", submit: "ပို့ဆောင်မှုတောင်းဆိုချက် စမ်းကြည့်ရန်", successTitle: "နမူနာတောင်းဆိုချက် အဆင်သင့်ဖြစ်ပါပြီ။", successBody: "သင်ဖြည့်ထားသော အချက်အလက်များ မှန်ကန်သည့်ပုံစံဖြစ်ပါသည်။ မည်သည့်အချက်အလက်ကိုမျှ မပို့ထားပါ၊ မသိမ်းဆည်းထားပါ။ တကယ့်ဝက်ဘ်ဆိုက်တွင် Admin မှ ငွေပေးချေမှုကို စစ်ဆေးပြီးမှ မြေပုံပို့ပေးမည်ဖြစ်ပါသည်။", edit: "အချက်အလက် ပြင်ဆင်ရန်", invalidPhone: "ဂဏန်း ၇ လုံးမှ ၁၅ လုံးအထိပါသော ဖုန်းနံပါတ်ကို ထည့်ပါ။", invalidName: "သင့်အမည်ကို ဖြည့်ပေးပါ။",
    downloadEyebrow: "သင်နှင့်အတူ ယူဆောင်သွားမည့် ရန်ကုန်", downloadTitle: "အခမဲ့မြေပုံကို ရယူနေပါပြီ။", downloadCopy: "ဒေါင်းလုဒ် အလိုအလျောက် စတင်ပါမည်။ မစတင်ပါက အောက်ပါခလုတ်ကို နှိပ်ပါ။", downloadAgain: "အခမဲ့မြေပုံ ဒေါင်းလုဒ်လုပ်ရန်", downloadDemo: "ဤ SVG မြေပုံသည် နမူနာသရုပ်ဖော်ပုံသာဖြစ်ပြီး လမ်းညွှန်မြေပုံ မဟုတ်ပါ။ အသုံးမပြုမီ သင့်မြေပုံဖိုင်အမှန်ဖြင့် အစားထိုးပါ။", explorePaid: "အခပေးမြေပုံကို ကြည့်ရန် →",
    homeTitle: "သင့်မြို့ကို လေ့လာပါ", checkoutPageTitle: "KPay ငွေပေးချေမှု", downloadPageTitle: "သင့်အခမဲ့မြေပုံ",
  },
};

let language = "en";
try { language = localStorage.getItem("yangon-maps-language") === "my" ? "my" : "en"; } catch (_) { /* Storage may be unavailable for local files. */ }
const translate = key => messages[language][key] || messages.en[key] || key;

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = translate(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = translate(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = translate(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-language]").forEach(el => el.setAttribute("aria-pressed", String(el.dataset.language === next)));
  const notice = document.getElementById("notice-en");
  if (notice) notice.hidden = next === "my";
  if (config.kpayName === "Your account name") document.querySelectorAll("[data-kpay-name]").forEach(el => { el.textContent = translate("accountPlaceholder"); });
  const titleKey = { home: "homeTitle", checkout: "checkoutPageTitle", download: "downloadPageTitle" }[document.body.dataset.page];
  document.title = translate(titleKey) + " | Yangon Maps";
  document.querySelectorAll("input").forEach(el => el.setCustomValidity(""));
  try { localStorage.setItem("yangon-maps-language", next); } catch (_) { /* The switch still works without storage. */ }
}

document.querySelectorAll("[data-price]").forEach(el => { el.textContent = new Intl.NumberFormat("en-US").format(config.priceMMK); });
document.querySelectorAll("[data-kpay-phone]").forEach(el => { el.textContent = config.kpayPhone; });
document.querySelectorAll("[data-kpay-name]").forEach(el => { el.textContent = config.kpayName; });
document.querySelectorAll("[data-language]").forEach(el => el.addEventListener("click", () => setLanguage(el.dataset.language)));
setLanguage(language);

const qr = document.getElementById("kpay-qr");
if (qr && config.kpayQrImage) {
  qr.addEventListener("load", () => {
    qr.hidden = false;
    document.getElementById("qr-placeholder").hidden = true;
    document.getElementById("qr-demo").hidden = true;
  });
  qr.addEventListener("error", () => {
    qr.hidden = true;
    document.getElementById("qr-placeholder").hidden = false;
    document.getElementById("qr-demo").hidden = false;
  });
  qr.src = config.kpayQrImage;
}

const copyButton = document.getElementById("copy-phone");
if (copyButton) copyButton.addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  if (config.kpayPhone.includes("X")) {
    status.classList.remove("sr-only");
    status.textContent = translate("phonePlaceholder");
    return;
  }
  try {
    await navigator.clipboard.writeText(config.kpayPhone);
    copyButton.textContent = translate("copied");
    status.textContent = translate("copied");
    setTimeout(() => { copyButton.textContent = translate("copy"); }, 2000);
  } catch (_) {
    status.classList.remove("sr-only");
    status.textContent = translate("copyFailed");
  }
});

const downloadLink = document.getElementById("download-link");
if (downloadLink) {
  downloadLink.href = config.freeMapFile;
  downloadLink.download = config.freeMapDownloadName;
  // Runs only on the download page; a visible link remains for browsers that block automatic downloads.
  downloadLink.click();
}

const form = document.getElementById("order-form");
if (form) {
  const nameInput = document.getElementById("customer-name");
  const phoneInput = document.getElementById("customer-phone");
  const success = document.getElementById("form-success");
  form.querySelectorAll("input").forEach(input => input.addEventListener("input", () => {
    input.setCustomValidity("");
    success.hidden = true;
  }));
  form.addEventListener("submit", event => {
    event.preventDefault();
    nameInput.setCustomValidity(nameInput.value.trim() ? "" : translate("invalidName"));
    // Accept Myanmar numerals as well as Latin digits.
    const phone = phoneInput.value.replace(/[၀-၉]/g, digit => String(digit.charCodeAt(0) - 0x1040));
    const digits = phone.replace(/\D/g, "");
    const validPhone = /^\+?[\d\s()\-]+$/.test(phone.trim()) && digits.length >= 7 && digits.length <= 15;
    phoneInput.setCustomValidity(validPhone ? "" : translate("invalidPhone"));
    if (!form.reportValidity()) return;
    success.hidden = false;
    success.focus();
  });
  document.getElementById("edit-details").addEventListener("click", () => {
    success.hidden = true;
    nameInput.focus();
  });
}
