# Generated by Django 4.0.2 on 2022-03-17 17:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_todo_lastmodified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='lastModified',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]
