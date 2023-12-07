const express = require('express');
const app = express();

const piadas = [
    "Por que o esqueleto não brigou com ninguém? Porque ele não tem estômago para isso!",
    "O que o zero falou para o oito? Isso aí, teu cinto está muito largo!",
    "O que é um pontinho amarelo na cozinha? Uma ervilha de castigo!",
    "Por que a galinha atravessou a rua? Para chegar do outro lado!",
    "Como o Batman faz para que o seu cereal esteja sempre crocante? Ele o come no Bat-lugar!",
    "O que é um ponto preto no avião? Uma aeromosca!",
    "O que é um feixe de luz verde fazendo abdominais? Um raio verde!",
    "Por que o livro de matemática está estressado? Porque tem muitos problemas!",
    "O que é um vegetariano que come carne? Um ex-vegetariano!",
    "O que o pneu falou para o asfalto? Deixa que eu rolo!",
];

app.get('/api/piadas/:quantidade', (req, res) => {
    const quantidade = parseInt(req.params.quantidade);
    if (isNaN(quantidade)) {
        return res.status(400).json({ erro: 'A quantidade deve ser um número inteiro.' });
    }

    const piadasSelecionadas = getNRandomJokes(quantidade);
    res.json({ piadas: piadasSelecionadas });
});

function getNRandomJokes(n) {
    const piadasSelecionadas = [];
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * piadas.length);
        piadasSelecionadas.push(piadas[randomIndex]);
    }
    return piadasSelecionadas;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
