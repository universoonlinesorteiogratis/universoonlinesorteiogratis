// Configuração do Supabase
const SUPABASE_URL = 'https://dtkonvkclvmgcqdmxuih.supabase.co';  // Coloque sua URL do Supabase aqui
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0a29udmtjbHZtZ2NxZG14dWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNTU0NzcsImV4cCI6MjA1NjkzMTQ3N30.PbZ3S-3Fftb9kz-Nt0wBU3PaJ4Q_HBFsZhxXNABMetc';  // Coloque sua chave anon aqui

// Criação do cliente Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função de cadastro
async function cadastrarUsuario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const data_cadastro = new Date().toISOString();

  // Enviar dados para o Supabase
  const { data, error } = await supabase
    .from('participantes')  // Nome da tabela criada
    .insert([{ nome, email, whatsapp, data_cadastro }]);

  if (error) {
    console.error("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar! Verifique o console.");
} else {
    alert("Cadastro realizado com sucesso! Você já está participando do sorteio.");
    document.getElementById("cadastroForm").reset(); // Limpa o formulário após sucesso
}


// Impede o envio do formulário e chama a função de cadastro
document.getElementById('cadastroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    await cadastrarUsuario(); // Aguarda o cadastro ser finalizado antes de prosseguir
});
