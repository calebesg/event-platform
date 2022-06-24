export function Footer() {
  return (
    <footer className="bg-gray-900 w-full px-8">
      <div className="flex justify-between items-center border-t border-gray-600 py-6">
        <div className="flex items-center gap-8">
          <img src="/src/assets/logo-rockeat.png" alt="Rocketseat" />
          <p className="text-gray-300">
            Rocketseat - Todos os direitos reservados
          </p>
        </div>
        <p className="text-gray-300">Políticas de privacidade</p>
      </div>
    </footer>
  );
}
