function doPost(e) {
  try {
    var payload = readPayload_(e);
    var to = payload.to || "kevin.mccann@greececsd.org";
    var subject = payload.subject || "Family Functions Packet Results";
    var report = payload.report || "";
    var filename = payload.filename || "family-functions-results.txt";
    var summary = payload.summary || "Family Functions packet results are attached.";
    var blob = Utilities.newBlob(report, "text/plain", filename);

    var draft = GmailApp.createDraft(
      to,
      subject,
      summary + "\n\nAttached: " + filename,
      { attachments: [blob] }
    );

    return json_({
      ok: true,
      draftId: draft.getId(),
      to: to,
      subject: subject,
      filename: filename,
    });
  } catch (err) {
    return json_({
      ok: false,
      error: String(err && err.stack ? err.stack : err),
    });
  }
}

function doGet(e) {
  if (e && e.parameter && e.parameter.testDraft === "1") {
    var draft = GmailApp.createDraft(
      "kevin.mccann@greececsd.org",
      "Family Functions Gmail Helper Test",
      "If you can see this draft, the Apps Script web app can create Gmail drafts.",
      {
        attachments: [
          Utilities.newBlob(
            "This is a test attachment from the Family Functions Gmail helper.",
            "text/plain",
            "family-functions-helper-test.txt"
          ),
        ],
      }
    );
    return json_({ ok: true, draftId: draft.getId(), message: "Test draft created." });
  }

  return ContentService
    .createTextOutput("Family Functions Gmail helper is running. Add ?testDraft=1 to test draft creation.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function readPayload_(e) {
  var payload = e && e.parameter ? e.parameter : {};
  if ((!payload.report || !payload.filename) && e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents || "{}");
    } catch (err) {
      return payload;
    }
  }
  return payload;
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
