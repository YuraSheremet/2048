function templateString(template, attributes) {
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            template = template.replace('{{ ' + key + ' }}', attributes[key]);
        }
    }
    return template;
}
