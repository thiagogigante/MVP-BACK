let i = 1;
const int = setInterval(() => {
    console.log(i);
    i++;
}, 1000);

function minhaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;

            if (sucesso) {
                clearInterval(int);
                resolve("Operação concluída com sucesso!");
            } else {
                clearInterval(int);
                reject("Ocorreu um erro durante a operação.");
            }
        }, 4000);
    });
}

minhaPromise()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));

fetch("localhost:3000/appointment/new", {
    method: "POST",
    body: {
        name: "Bruno",
        email: "bruno@teste.com",
        phoneNumber: "21987654321",
        date: "11/11/2024",
        time: "16:00",
    },
}).then((response) => {
    const data = response.data;
}).catch();
