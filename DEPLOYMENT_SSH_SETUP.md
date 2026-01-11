# Инструкция по настройке SSH для деплоя

## Важно: Локальный компьютер ≠ Сервер

Для деплоя на сервер через GitHub Actions нужны:
- **Публичный ключ** на сервере (в `~/.ssh/authorized_keys`)
- **Приватный ключ** в GitHub Secrets (секрет `SERVER_SSH_KEY`)

## Шаг 1: Проверьте публичный ключ на сервере

1. Подключитесь к вашему серверу (Hetzner):
   ```bash
   ssh username@your-server-ip
   ```

2. Проверьте, добавлен ли ваш публичный ключ:
   ```bash
   cat ~/.ssh/authorized_keys
   ```
   
   Должен быть ключ: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDe0VcspjIgb4K3c1LPSRRhQ4jz0lqA3HzMqSnM/J3Hx vadim@DESKTOP-JGA03GF`

3. Если ключа нет, добавьте его:
   ```bash
   echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDe0VcspjIgb4K3c1LPSRRhQ4jz0lqA3HzMqSnM/J3Hx vadim@DESKTOP-JGA03GF" >> ~/.ssh/authorized_keys
   chmod 600 ~/.ssh/authorized_keys
   chmod 700 ~/.ssh
   ```

## Шаг 2: Добавьте приватный ключ в GitHub Secrets

**ВАЖНО: Используйте ПРИВАТНЫЙ ключ, не публичный!**

### На Windows (PowerShell):

```powershell
# Скопировать приватный ключ в буфер обмена
Get-Content $env:USERPROFILE\.ssh\id_ed25519 | Set-Clipboard
```

Или откройте файл вручную:
```powershell
notepad $env:USERPROFILE\.ssh\id_ed25519
```

### Что скопировать:

Скопируйте **ВСЁ** содержимое файла, включая:
- Первую строку: `-----BEGIN OPENSSH PRIVATE KEY-----`
- Все строки посередине
- Последнюю строку: `-----END OPENSSH PRIVATE KEY-----`

**НЕ копируйте публичный ключ (файл с расширением .pub)!**

### Добавление в GitHub Secrets:

1. Перейдите в репозиторий на GitHub
2. Settings → Secrets and variables → Actions
3. Нажмите "New repository secret"
4. Имя: `SERVER_SSH_KEY`
5. Значение: вставьте скопированный приватный ключ (Ctrl+V)
6. Нажмите "Add secret"

## Шаг 3: Проверьте остальные секреты

Убедитесь, что все секреты настроены:
- `SERVER_HOST` - IP адрес или домен сервера (например: `123.45.67.89`)
- `SERVER_USER` - имя пользователя на сервере (например: `root` или `deploy`)
- `SERVER_SSH_KEY` - приватный SSH-ключ (только что добавленный)
- `SERVER_PORT` - порт SSH (опционально, по умолчанию 22)
- `DEPLOY_PATH` - путь к проекту на сервере (опционально, по умолчанию `/var/www/lawyer-website`)

## Шаг 4: Проверьте формат ключа

Приватный ключ должен выглядеть примерно так:

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACB3tFXLCYyIG+Ct3NSz0kUYUOI89JagNx8zKkpzPydx8QAAAJgAAAAAAAAA
... (много строк) ...
-----END OPENSSH PRIVATE KEY-----
```

**НЕ должно быть:**
- Лишних пробелов в начале/конце
- Пустых строк до/после
- Только публичного ключа (одна строка, начинается с `ssh-ed25519`)

## Проверка

После добавления всех секретов, сделайте push в ветку `main` или `master` - деплой должен начаться автоматически.

