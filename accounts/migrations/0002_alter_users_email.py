# Generated by Django 4.0.6 on 2022-08-03 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='Email',
            field=models.EmailField(max_length=180),
        ),
    ]
