# Generated by Django 4.2.7 on 2023-12-12 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=1000)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('zip', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=50)),
            ],
        ),
    ]
