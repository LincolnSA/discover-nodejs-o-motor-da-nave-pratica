const getFlag = (flags) => {
    const arrayDataProcess = process.argv
    const stringConvertedArray = flags.split(" ").map(item => item.trim())
    let valueFlags = []
    let message = ""


    for (const flag of stringConvertedArray) {

        for (const data of arrayDataProcess) {

            if (flag.includes(data)) {

                let indexFlag = arrayDataProcess.indexOf(flag)
                valueFlags.push(arrayDataProcess[++indexFlag])
            }
        }
    }

    message = valueFlags.join(" ")

    return message
}

module.exports = getFlag
