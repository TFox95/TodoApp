# Generated by Django 4.0.2 on 2022-03-17 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_todo_lastmodified'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='lastModified',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
