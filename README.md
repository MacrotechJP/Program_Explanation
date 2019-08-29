#AmazonLinuxログインコマンド
cd .ssh/
ssh -i engineer_koyo.pem ec2-user@3.114.230.22
#AmazonLinuxコマンド
sudo service mysqld start(MySQL起動)
sudo service mysqld status(MySQL起動確認)
sudo vim /etc/environment(環境変数設定ファイル)
env | grep DATABASE_PASSWORD(DATEBASE_PASSWORD確認)
env | grep SECRET_KEY_BASE(SEACET_KEY_BASE確認)
less log/unicorn.stderr.log(unicorn関係で起きたエラーをみる)
#MySQLパスワード
koyotanaka

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
