function doPost(e) {
  var payload = e.parameter || {};
  if ((!payload.report || !payload.filename) && e.postData && e.postData.contents) {
    try {
      payload = JSON.parse(e.postData.contents || "{}");
    } catch (err) {
      payload = {};
    }
  }
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

function doGet() {
  return ContentService
    .createTextOutput("Family Functions Gmail helper is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
