(function propertiesbuilder(attr) {

    // Supported params: https://arrow.apache.org/docs/java/flight_sql_jdbc_driver.html
    var props = {};

    if (attr[connectionHelper.attributeSSLMode] == "require") {
        props["useEncryption"] = 1;
    } else {
        props["useEncryption"] = 0;
    }

    if (attr["v-disable-certificate-verification"] != "") {
        props["disableCertificateVerification"] = 1;
    };

    return props;
})
