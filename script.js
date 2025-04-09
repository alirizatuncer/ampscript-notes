<script runat="server">
    Platform.Load("core", "1");

    var api = new Script.Util.WSProxy();

    try {
        var fields = [
            {
                "Name": "FirstName",
                "FieldType": "Text",
                "MaxLength": 100,
                "IsRequired": false,
                "IsPrimaryKey": false
            },
            {
                "Name": "LastName",
                "FieldType": "Text",
                "MaxLength": 100,
                "IsRequired": false,
                "IsPrimaryKey": false
            },
            {
                "Name": "Email",
                "FieldType": "EmailAddress",
                "IsRequired": true,
                "IsPrimaryKey": true
            },
            {
                "Name": "PhoneNumber",
                "FieldType": "Phone",
                "IsRequired": false,
                "IsPrimaryKey": false
            }
        ];

        var config = {
            "CustomerKey": Platform.Function.GUID(),
            "Name": "CustomerBasicContactDetails",
            "Fields": fields
        };

        var result = api.createItem("DataExtension", config);

        if (result && result.Results && result.Results.length > 0) {
            var statusCode = result.Results[0].StatusCode;
            var statusMessage = result.Results[0].StatusMessage;

            if (statusCode === "OK") {
                Write("Success: " + statusMessage);
                Write("</br>");
            } else {
                Write("Error: " + statusMessage);
                Write("</br>");
            }
        } else {
            Write("Error: Unexpected response structure.");
        }
    } catch (error) {
        Write("Exception: " + Stringify(error));
    }
</script>
