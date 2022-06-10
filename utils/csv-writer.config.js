import CsvWriter from "csv-writer";

const createCsvWriter = CsvWriter.createObjectCsvWriter;
const csvWrite = createCsvWriter(({
    path: './public/emailOutput.csv',
    header: [
        {id: 'firstname', title: 'First Name'},
        {id: 'lastname', title: 'Last Name'},
        {id: 'domain', title: 'Domain'}
    ]
}));

export default csvWrite;