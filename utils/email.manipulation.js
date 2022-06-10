import csvWrite from "./csv-writer.config.js";

export const emailStringManipulation = (result) => {
    const output = [];
    result.forEach(element => {
        const splitEmail = element.email.split(/[. \s @ \s . ]/);
        if (splitEmail.length <= 4) {
            const data = {
                firstname: splitEmail[0],
                lastname: splitEmail[1],
                domain: splitEmail[2]
            };
            output.push(data);
        }
    });
    csvWrite.writeRecords(output)
    .then(() => console.log('Data uploaded successfully'))
    .catch(() => {
        console.log('Error writing records to the file')
    });
}