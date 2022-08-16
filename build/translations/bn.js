!(function (n) {
  const t = (n.bn = n.bn || {});
  (t.dictionary = Object.assign(t.dictionary || {}, {
    "Align center": "কেন্দ্র সারিবদ্ধ করুন",
    "Align left": "বামে সারিবদ্ধ করুন",
    "Align right": "ডানদিকে সারিবদ্ধ করুন",
    Justify: "জাস্টিফাই",
    "Text alignment": "টেক্সট সারিবদ্ধকরণ",
    "Text alignment toolbar": "টেক্সট শ্রেণীবিন্যাস টুলবার",
  })),
    (t.getPluralForm = function (n) {
      return 1 != n;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
