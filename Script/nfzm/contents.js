 var body = $response.body
    .replace(/\"isview\":false/g, "\"isview\":true")
    .replace(/\"mode\":\"meterage\"/g, "\"mode\":\"free\"")
    .replace(/\"is_original\":1/g, "\"is_original\":0")
    .replace(/\"poster_to_share\":1/g, "\"poster_to_share\":0");
$done({ body });
