# Generated by Django 3.1.2 on 2020-11-22 23:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('usuarios', '0003_auto_20201122_1521'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=64)),
                ('descripcion', models.TextField()),
                ('precio_actual', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
        migrations.RemoveField(
            model_name='paciente',
            name='paciente',
        ),
        migrations.AddField(
            model_name='paciente',
            name='apellido',
            field=models.CharField(default='falta', max_length=64),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='paciente',
            name='nombre',
            field=models.CharField(default='falta', max_length=64),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='paciente',
            name='telefono',
            field=models.CharField(max_length=15),
        ),
        migrations.CreateModel(
            name='Turno',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('horario', models.TimeField()),
                ('asistencia', models.CharField(max_length=2)),
                ('medico', models.ForeignKey(db_column='medico_id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('paciente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.paciente')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_hora', models.DateTimeField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=8)),
                ('cantidad', models.IntegerField()),
                ('medio_pago', models.CharField(max_length=20)),
                ('estado', models.CharField(max_length=30)),
                ('paciente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.paciente')),
                ('producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.producto')),
                ('vendedor', models.ForeignKey(db_column='vendedor_id', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Diagnostico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diagnostico', models.TextField()),
                ('observacion', models.TextField()),
                ('turno', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='usuarios.turno')),
            ],
        ),
    ]