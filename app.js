let miner;
let mining = false;
let hashes = 0;

// Инициализация майнера
function startMining() {
    // Пример: Используем fonyx для майнинга лайткоинов
    miner = new Fonyx.Anonymous('YOUR-WALLET-ADDRESS');

    miner.start();
    mining = true;

    document.getElementById('startMining').disabled = true;
    document.getElementById('stopMining').disabled = false;
    document.getElementById('status').textContent = 'Статус: Майнинг начат';

    // Обновление информации о хешах
    miner.on('accepted', () => {
        hashes += 1;
        document.getElementById('hashes').textContent = `Количество захешированных блоков: ${hashes}`;
    });
}

// Остановка майнинга
function stopMining() {
    if (miner) {
        miner.stop();
        mining = false;
    }

    document.getElementById('startMining').disabled = false;
    document.getElementById('stopMining').disabled = true;
    document.getElementById('status').textContent = 'Статус: Остановлен';
}

document.getElementById('startMining').addEventListener('click', startMining);
document.getElementById('stopMining').addEventListener('click', stopMining);
