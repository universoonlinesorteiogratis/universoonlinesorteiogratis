document.addEventListener("DOMContentLoaded", function () {
    // Configuração do Supabase
    const SUPABASE_URL = "https://dtkonvkclvmgcqdmxuih.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0a29udmtjbHZtZ2NxZG14dWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNTU0NzcsImV4cCI6MjA1NjkzMTQ3N30.PbZ3S-3Fftb9kz-Nt0wBU3PaJ4Q_HBFsZhxXNABMetc";

    // Criando a conexão com o Supabase
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    console.log("Supabase carregado:", supabase); // Teste para ver se carregou

    async function cadastrarUsuario() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const whatsapp = document.getElementById("whatsapp").value;
        const data_cadastro = new Date().toISOString();

        const { data, error } = await supabase
            .from("participants") // Nome da tabela
            .insert([{ nome, email, whatsapp, data_cadastro }]);

        if (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar! Verifique o console.");
        } else {
            alert("Cadastro realizado com sucesso! Você já está participando do sorteio.");
            document.getElementById("cadastroForm").reset();
        }
    }

    // Captura o envio do formulário
    document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        
        await cadastrarUsuario();
    });
});
