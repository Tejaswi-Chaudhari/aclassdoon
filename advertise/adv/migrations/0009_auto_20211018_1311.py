# Generated by Django 3.2.8 on 2021-10-18 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adv', '0008_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ad',
            name='img1',
            field=models.ImageField(default='assets/placeholder.png', upload_to='assets'),
        ),
        migrations.AlterField(
            model_name='ad',
            name='img2',
            field=models.ImageField(default='assets/placeholder.png', upload_to='assets'),
        ),
        migrations.AlterField(
            model_name='ad',
            name='img3',
            field=models.ImageField(default='assets/placeholder.png', upload_to='assets'),
        ),
        migrations.AlterField(
            model_name='ad',
            name='thumbnail',
            field=models.ImageField(default='assets/placeholder.png', upload_to='assets'),
        ),
    ]
