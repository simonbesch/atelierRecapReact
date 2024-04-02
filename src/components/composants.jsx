function Composants() {
  return (
    <>
    <h2>Les composants</h2>
      <p>
        Le composants est un fichier .jsx qui englobe un bout de code qui
        effectue une tache donne.</p>
        <p> Un composantspeut avoir des fichier parents, a qui il envoie ses donnees et/ou 
            des fichiers enfants a qui il envoit et recoit des donnees.
      </p>
      <p>Pour envoyer et recevoir des donnees entre parents et enfants on utilie des PROPS qui sera explique par Simon un peu plus tard</p>
      <p>Utiliser des compopsants pour creer sa page est utile a plusieurs egards:
        <ul>
            <li>Premierement pour rerendre un composants on a plus besoin de recharger entierment la page, on obtient un gaun de temps et moins de donnees sont utiliser</li>
            <li>Deuxiemement pour deboger la page on a juste besoin de se rendre sur le composants en question qui est plus leger a lire et a comprendre et donc a deboger</li>
        </ul>
      </p>
    </>
  );
}

export default Composants;
