---
title: "MySQLでrootのパスワードを忘れたとき"
date: 2010-08-19
categories: 
  - "mysql"
---

え？ 何か？ \[sourcecode language="plain"\] --skip-grant-tables \[/sourcecode\] オプション付きでmysqlを起動するか、/etc/my.confに以下のように記入して、mysqlを再起動。 \[sourcecode language="plain"\] \[mysqld\] skip-grant-tables \[/sourcecode\] すると、パスワードなしでrootで入れるようになるので、入って、 \[sourcecode language="plain"\] UPDATE user SET Password=PASSWORD('新しいパスワード') WHERE User='root'; FLUSH PRIVILEGES; \[/sourcecode\] して、 **skip-grant-tablesは消して、再起動**して、もとに戻すのだけ絶対忘れちゃダメ。 以上です。 参考URL [http://dev.mysql.com/doc/refman/4.1/ja/resetting-permissions.html](http://dev.mysql.com/doc/refman/4.1/ja/resetting-permissions.html)
