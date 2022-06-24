export function Footer() {
  return (
    <footer className="bg-gray-900 w-full px-8">
      <div className="flex gap-6 flex-col lg:flex-row justify-between items-center border-t border-gray-600 py-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img src="/src/assets/logo-rockeat.png" alt="Rocketseat" />
          <p className="text-gray-300 text-sm">
            Rocketseat - Todos os direitos reservados
          </p>
        </div>
        <p className="text-gray-300 text-sm">Políticas de privacidade</p>
      </div>
    </footer>
  );
}
