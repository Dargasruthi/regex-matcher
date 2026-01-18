function findMatches() {

    // Get input values
    const testString = document.getElementById("testString").value;
    const regexInput = document.getElementById("regexPattern").value;
    const resultList = document.getElementById("result");

    // Clear previous results
    resultList.innerHTML = "";

    try {
        // Create regex with global flag
        const regex = new RegExp(regexInput, "g");

        // Find matches
        const matches = testString.match(regex);

        if (matches) {
            matches.forEach(match => {
                const li = document.createElement("li");
                li.textContent = match;
                resultList.appendChild(li);
            });
        } else {
            resultList.innerHTML = "<li>No matches found</li>";
        }

    } catch (error) {
        resultList.innerHTML = "<li>Invalid Regular Expression</li>";
    }
}
