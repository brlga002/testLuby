<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'Gabriel Lima',
            'email' => 'gabriel@luby.com.br',
            'password' => Hash::make('123'),
        ]);

        Student::create([
            'name' => 'Gabriel Fernandes',
            'nMatricula' => '1234C',
            'serie' => '8',
            'sexo' => 'masculino',
            'idade' => '30',
            'cpf' => '002.130.832.20',
            'telefone' => '(92) 99175-5655',
            'cep' => '69021525',
            'logradouro' => 'rua a',
            'complemento' => 'prox mercado',
            'numero' => '8',
            'bairro' => 'campo sales',
            'localidade' => 'manaus',
            'uf' => 'AM',
        ]);

        Student::create([
            'name' => 'Miguel Lima',
            'nMatricula' => '5234C',
            'serie' => '5',
            'sexo' => 'masculino',
            'idade' => '20',
            'cpf' => '011.789.832.20',
            'telefone' => '(92) 99175-5655',
            'cep' => '69021525',
            'logradouro' => 'rua b',
            'complemento' => 'prox banco',
            'numero' => '80',
            'bairro' => 'pq dex',
            'localidade' => 'manaus',
            'uf' => 'AM',
        ]);

        Note::create([
            'nota' => 6,
            'resultado' => 'aprovado',
            'student_id' => 1,
        ]);
    }
}
