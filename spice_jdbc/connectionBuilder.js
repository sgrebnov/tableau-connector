(function dsbuilder(attr) {
    var urlBuilder = "jdbc:arrow-flight-sql://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort];
    return [urlBuilder];
})
