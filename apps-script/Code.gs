function doPost(e) {
  var payload = JSON.parse(e.postData.contents || "{}");
  var to = payload.to || "kevin.mccann@greececsd.org";
  var subject = payload.subject || "Family Functions Packet Results";
  var report = payload.report || "";
  var filename = payload.filename || "family-functions-results.txt";
  var summary = payload.summary || "Family Functions packet results are attached.";
  var blob = Utilities.newBlob(report, "text/plain", filename);

  GmailApp.createDraft(
    to,
    subject,
    summary + "\n\nAttached: " + filename,
    { attachments: [blob] }
  );

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
