# Generated by Django 4.2.7 on 2023-12-16 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_order_total'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Product',
            new_name='Products',
        ),
        migrations.RenameField(
            model_name='products',
            old_name='discount',
            new_name='discount_price',
        ),
        migrations.RemoveField(
            model_name='order',
            name='zip',
        ),
        migrations.AddField(
            model_name='order',
            name='zipcode',
            field=models.CharField(default=2, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='address',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='order',
            name='city',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='email',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='state',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='total',
            field=models.CharField(max_length=200),
        ),
    ]
