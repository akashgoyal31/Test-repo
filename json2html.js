export default function json2html(data) {
    const columns = Array.from(new Set(data.flatMap(Object.keys)));

    let html = `<table data-user="goyalakash3107@gmail.com">\n`;


    html += "  <thead>\n    <tr>";
    columns.forEach(column => {
        html += `<th>${column}</th>`;
    });
    html += "</tr>\n  </thead>\n";

 
    html += "  <tbody>\n";
    data.forEach(row => {
        html += "    <tr>";
        columns.forEach(column => {
            html += `<td>${row[column] !== undefined ? row[column] : ""}</td>`;
        });
        html += "</tr>\n";
    });
    html += "  </tbody>\n</table>";

    return html;
}