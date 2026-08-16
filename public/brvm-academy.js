// ---- LESSONS DATA ----
const lessons = {
  sgis: {
    module: "Module 01 — Architecture",
    title: "Les Sociétés de Gestion et d'Intermédiation (SGI)",
    content: `
      <p>Une SGI est la porte d'entrée obligatoire pour tout investisseur souhaitant acheter ou vendre des titres sur la BRVM. Aucun particulier ne peut passer directement des ordres sur le marché — vous devez obligatoirement passer par un intermédiaire agréé.</p>
      <div class="highlight-box"><p>💡 Les SGI sont agréées par le AMF-UMOA et soumises à des obligations strictes de capital, de reporting et de protection des clients.</p></div>
      <h4>Rôles d'une SGI</h4>
      <ul class="key-points">
        <li>Réception et transmission des ordres d'achat/vente pour le compte de clients</li>
        <li>Conservation des titres et tenue du compte-titres</li>
        <li>Gestion de portefeuille pour compte de tiers (mandat)</li>
        <li>Conseil en investissement et analyse financière</li>
        <li>Introductions en bourse et augmentations de capital</li>
      </ul>
      <h4>Comment ouvrir un compte ?</h4>
      <p>Contactez directement une SGI agréée dans votre pays UEMOA. Vous devrez fournir une pièce d'identité, justificatif de domicile, et un dépôt minimum variable selon l'établissement. Les formulaires sont désormais souvent disponibles en ligne.</p>
    `
  },
  crepmf: {
    module: "Module 01 — Architecture",
    title: "Le AMF-UMOA — L'autorité de régulation",
    content: `
      <p>Le Autorité des Marchés Financiers de l'Union Monétaire Ouest-Africaine (AMF-UMOA) (AMF-UMOA) est l'équivalent de l'AMF (France) ou de la SEC (USA) pour l'espace UEMOA. C'est lui qui fixe les règles, surveille les acteurs et protège les épargnants.</p>
      <div class="highlight-box"><p>⚖️ Tout acteur du marché financier UEMOA — SGI, gestionnaires de fonds, émetteurs — opère sous licence AMF-UMOA. Sans agrément : activité illégale.</p></div>
      <h4>Missions principales</h4>
      <ul class="key-points">
        <li>Agrément et surveillance des intervenants du marché (SGI, sociétés de gestion)</li>
        <li>Approbation des prospectus d'émission (actions, obligations)</li>
        <li>Surveillance du marché et lutte contre les abus (délit d'initié, manipulation)</li>
        <li>Protection des investisseurs et des épargnants</li>
        <li>Promotion du développement du marché financier régional</li>
      </ul>
      <h4>Pourquoi c'est important pour vous ?</h4>
      <p>En tant qu'investisseur, le AMF-UMOA vous garantit que les documents d'information publiés par les sociétés cotées ont été vérifiés et que votre SGI opère dans un cadre légal contrôlé. C'est votre filet de sécurité institutionnel.</p>
    `
  },
  indices: {
    module: "Module 02 — Lire les marchés",
    title: "BRVM Composite vs BRVM 30",
    content: `
      <p>La BRVM publie deux indices principaux qui servent de baromètre de la santé du marché. Les comprendre, c'est comprendre d'un coup d'œil comment se porte l'ensemble des bourses de l'UEMOA.</p>
      <h4>BRVM Composite</h4>
      <p>Inclut <strong>toutes les sociétés cotées</strong> sur le marché des actions. C'est l'indice le plus représentatif de l'ensemble de l'économie des pays membres. Il permet de mesurer la tendance générale sur le long terme.</p>
      <h4>BRVM 30</h4>
      <p>Restreint aux <strong>30 valeurs les plus liquides</strong> du marché. La liquidité est le critère central — un titre qui s'échange peu aura peu d'impact sur cet indice. Le BRVM 30 est le plus suivi par les traders actifs car il reflète mieux le sentiment de marché à court terme.</p>
      <div class="highlight-box"><p>📐 Formule simplifiée d'un indice : Somme des capitalisations des valeurs incluses / Diviseur de référence × Base 100 (date d'origine).</p></div>
      <h4>Comment les utiliser ?</h4>
      <ul class="key-points">
        <li>Comparer la performance de votre portefeuille à l'indice (benchmark)</li>
        <li>Identifier les tendances macro du marché (bull market / bear market)</li>
        <li>Évaluer si un titre spécifique sur- ou sous-performe le marché</li>
      </ul>
    `
  },
  dividendes: {
    module: "Module 03 — Les Actions",
    title: "Dividendes et politique de distribution",
    content: `
      <p>Un dividende est la fraction des bénéfices qu'une société décide de reverser à ses actionnaires. Ce n'est pas un droit automatique — c'est une décision de gestion validée en Assemblée Générale.</p>
      <div class="highlight-box"><p>💰 Le rendement du dividende (dividend yield) = Dividende annuel par action / Cours de l'action × 100. Sur la BRVM, certaines valeurs offrent des rendements de 5% à 10%.</p></div>
      <h4>Politique de distribution</h4>
      <ul class="key-points">
        <li><strong>Distribution élevée :</strong> Sociétés matures dans des secteurs stables (banques, télécoms). Peu de besoins en réinvestissement.</li>
        <li><strong>Distribution faible ou nulle :</strong> Sociétés en croissance qui préfèrent réinvestir les bénéfices pour se développer.</li>
        <li><strong>Distribution régulière :</strong> Signal de solidité financière et de confiance du management dans les perspectives futures.</li>
      </ul>
      <h4>Le calendrier du dividende</h4>
      <p>Date de détachement → Date d'enregistrement → Date de paiement. Pour recevoir le dividende, vous devez détenir le titre AVANT la date d'enregistrement. Le cours s'ajuste généralement à la baisse du montant du dividende le jour du détachement.</p>
    `
  },
  per: {
    module: "Module 03 — Les Actions",
    title: "PER, P/B et ratios de valorisation",
    content: `
      <p>Les ratios de valorisation permettent de comparer le prix d'un titre à des données fondamentales — et donc de déterminer si ce titre est cher, bon marché ou juste valorisé par rapport au marché et à ses pairs.</p>
      <h4>Price-to-Earnings (PER)</h4>
      <p>PER = Cours / Bénéfice par action (BPA). Si une action cote 5 000 FCFA et que son BPA est de 500 FCFA, son PER est de 10x. Cela signifie que vous payez 10 fois les bénéfices annuels.</p>
      <div class="highlight-box"><p>📊 Sur la BRVM, les PER moyens sont généralement plus bas que sur les marchés occidentaux, entre 5x et 15x selon les secteurs. Un PER très bas peut signaler une sous-évaluation — ou des problèmes cachés.</p></div>
      <h4>Price-to-Book (P/B)</h4>
      <p>P/B = Cours / Valeur comptable par action. Compare ce que vous payez (prix de marché) à ce que la société vaut sur ses livres (actifs nets). Un P/B inférieur à 1 peut indiquer une décote intéressante.</p>
      <h4>L'erreur à éviter</h4>
      <ul class="key-points">
        <li>Ne jamais utiliser un seul ratio — croiser PER, P/B, rendement du dividende et croissance du BPA</li>
        <li>Toujours comparer à des pairs du même secteur, pas à l'ensemble du marché</li>
        <li>Un faible PER peut cacher une société en déclin — creuser les raisons</li>
      </ul>
    `
  },
  taux: {
    module: "Module 04 — Obligations",
    title: "Taux actuariel et prix obligataire",
    content: `
      <p>La relation entre taux d'intérêt et prix des obligations est l'un des concepts les plus contre-intuitifs mais les plus fondamentaux de la finance. Il est impératif de le maîtriser avant d'investir en obligations.</p>
      <div class="highlight-box"><p>⚡ Règle d'or : Quand les taux montent → les prix des obligations baissent. Quand les taux baissent → les prix des obligations montent. Relation INVERSE.</p></div>
      <h4>Pourquoi cette relation inverse ?</h4>
      <p>Une obligation émise à 6% de coupon devient moins attractive si le marché offre désormais 8%. Pour que les investisseurs l'achètent quand même, son prix doit baisser pour compenser la différence de rendement.</p>
      <h4>Taux actuariel (yield to maturity)</h4>
      <p>C'est le rendement réel de l'obligation si vous la conservez jusqu'à maturité, en tenant compte du prix d'achat, des coupons et du remboursement final. C'est LE chiffre à regarder, pas le taux facial du coupon.</p>
      <h4>Implications pratiques</h4>
      <ul class="key-points">
        <li>Si vous pensez que les taux vont baisser : acheter des obligations longue durée pour bénéficier de la hausse de prix</li>
        <li>Si vous pensez que les taux vont monter : rester sur des obligations courtes ou du cash</li>
        <li>La duration mesure la sensibilité du prix aux variations de taux — plus la maturité est longue, plus la duration est élevée</li>
      </ul>
    `
  },
  these: {
    module: "Module 05 — Analyse Fondamentale",
    title: "Construire une thèse d'investissement",
    content: `
      <p>Une thèse d'investissement est un argumentaire structuré qui répond à une question : pourquoi ce titre devrait-il valoir plus dans 12 à 36 mois ? C'est ce qui distingue l'investissement de la spéculation.</p>
      <h4>Les 5 composantes d'une thèse solide</h4>
      <ul class="key-points">
        <li><strong>Catalyseur :</strong> Qu'est-ce qui va changer ? Nouveau produit, expansion géographique, restructuration, changement de management...</li>
        <li><strong>Valorisation :</strong> À quel prix le titre devrait-il se négocier selon vos projections ? Quel upside par rapport au cours actuel ?</li>
        <li><strong>Avantage concurrentiel :</strong> Qu'est-ce qui protège durablement la position de l'entreprise ? (marques, réseau, coûts, réglementation)</li>
        <li><strong>Risques identifiés :</strong> Quels scénarios rendraient votre thèse fausse ? Avoir des stop-loss mentaux.</li>
        <li><strong>Horizon temporel :</strong> Dans combien de temps les catalyseurs se matérialiseront-ils ?</li>
      </ul>
      <div class="highlight-box"><p>🎯 Sur la BRVM : commencez par les secteurs que vous comprenez — banques, télécoms, agroalimentaire. La transparence est limitée, donc l'avantage informationnel local compte.</p></div>
      <h4>Format recommandé</h4>
      <p>1 page max. Résumé en 3 phrases. Cours cible. 3 risques. Date de réévaluation. Si vous ne pouvez pas résumer en 1 page, vous ne comprenez pas encore assez bien le dossier.</p>
    `
  },
  psycho: {
    module: "Module 06 — Gestion de portefeuille",
    title: "Les biais cognitifs de l'investisseur",
    content: `
      <p>L'ennemi numéro un de l'investisseur n'est pas le marché — c'est lui-même. Les biais cognitifs sont des schémas de pensée automatiques qui dégradent systématiquement la qualité des décisions financières.</p>
      <h4>Les 5 biais les plus destructeurs</h4>
      <ul class="key-points">
        <li><strong>Biais de confirmation :</strong> On cherche des informations qui confirment ce qu'on pense déjà. Solution : chercher activement les arguments CONTRE votre position.</li>
        <li><strong>Aversion à la perte :</strong> La douleur de perdre 10 000 FCFA est psychologiquement 2x plus intense que le plaisir d'en gagner 10 000. On garde trop longtemps les perdants.</li>
        <li><strong>Biais de récence :</strong> On surpondère les événements récents. Après une hausse, on pense que ça va continuer. Après une baisse, on panique.</li>
        <li><strong>Ancrage :</strong> On reste fixé sur un prix de référence arbitraire (prix d'achat, plus haut historique) même quand ce chiffre n'est plus pertinent.</li>
        <li><strong>Excès de confiance :</strong> On surestime sa capacité à prédire le marché, surtout après une série de succès.</li>
      </ul>
      <div class="highlight-box"><p>🧠 Le remède universel : un processus écrit, documenté, appliqué de manière systématique. L'émotion ne peut pas corrompre un processus rigide.</p></div>
    `
  },
  ouvrir: {
    module: "Module 06 — Gestion de portefeuille",
    title: "Ouvrir un compte titres BRVM",
    content: `
      <p>Investir sur la BRVM passe par trois étapes concrètes. Le processus est plus simple qu'on ne le croit — mais comporte des étapes qu'il ne faut pas brûler.</p>
      <h4>Étape 1 : Choisir sa SGI</h4>
      <p>Identifiez une SGI agréée dans votre pays. Pour le Burkina Faso : SBIF, Coris Bourse, ou d'autres intermédiaires agréés. Comparez les frais de courtage (généralement 0,5% à 1% par transaction), les frais de tenue de compte, et la qualité du service client.</p>
      <h4>Étape 2 : Ouvrir le compte</h4>
      <ul class="key-points">
        <li>CNI ou passeport en cours de validité</li>
        <li>Justificatif de domicile de moins de 3 mois</li>
        <li>Formulaire d'ouverture de compte-titres</li>
        <li>Dépôt minimum (variable selon la SGI, souvent 50 000 à 100 000 FCFA)</li>
      </ul>
      <h4>Étape 3 : Passer son premier ordre</h4>
      <p>Transmettez un ordre d'achat à votre SGI (par email, application ou en agence). Précisez : le titre (code BRVM), la quantité, le type d'ordre (limité recommandé pour débutants) et le prix limite. Les séances ont lieu en semaine — vérifiez les horaires.</p>
      <div class="highlight-box"><p>🔰 Conseil pour débutant : commencez par des obligations d'État UEMOA. Rendements stables (6-8%), risque faible. Apprenez la mécanique avant de jouer sur les actions.</p></div>
    `
  },
  diversif: {
    module: "Module 06 — Gestion de portefeuille",
    title: "Diversification et corrélation",
    content: `
      <p>La diversification est la seule chose en finance qu'on appelle "le seul repas gratuit" — réduire le risque sans sacrifier le rendement attendu. Mais mal comprise, elle peut donner une fausse impression de sécurité.</p>
      <div class="highlight-box"><p>📐 La règle : deux actifs parfaitement corrélés (corrélation = +1) ne diversifient pas du tout. Deux actifs sans corrélation (= 0) réduisent le risque de ~30%. Des actifs inversement corrélés (= -1) éliminent quasi-totalement le risque.</p></div>
      <h4>Diversification sur la BRVM</h4>
      <ul class="key-points">
        <li>Par secteur : banques, télécoms, agroalimentaire, distribution, transport</li>
        <li>Par pays : Côte d'Ivoire, Sénégal, Burkina Faso, Togo ne réagissent pas identiquement aux chocs</li>
        <li>Par classe d'actif : mixer actions et obligations pour équilibrer rendement/risque</li>
        <li>Par taille : grandes capitalisations (stabilité) + petites valeurs (potentiel de croissance)</li>
      </ul>
      <h4>L'erreur de sur-diversification</h4>
      <p>Détenir 40 valeurs sur un marché de 45 sociétés cotées n'est pas de la gestion — c'est de l'indécision. Au-delà de 12-15 titres bien choisis, le bénéfice marginal de la diversification est quasi nul. Concentrez-vous sur ce que vous comprenez vraiment.</p>
    `
  }
};

// ---- QUIZ DATA ----
const quizData = [
  {
    q: "Dans combien de pays la BRVM est-elle opérationnelle ?",
    options: ["5 pays", "6 pays", "8 pays", "10 pays"],
    correct: 2,
    feedback: "La BRVM couvre les 8 pays de l'UEMOA : Côte d'Ivoire, Sénégal, Burkina Faso, Mali, Bénin, Niger, Togo et Guinée-Bissau. C'est l'une des rares bourses au monde à être véritablement régionale."
  },
  {
    q: "Quelle est la relation entre les taux d'intérêt et le prix des obligations ?",
    options: ["Relation directe : quand les taux montent, les prix montent", "Relation inverse : quand les taux montent, les prix baissent", "Aucune relation significative", "Relation variable selon le secteur"],
    correct: 1,
    feedback: "Relation INVERSE. Quand les taux du marché montent, une obligation existante à coupon fixe devient moins attractive — son prix baisse pour compenser. C'est l'un des concepts les plus importants du marché obligataire."
  },
  {
    q: "Qu'est-ce que le AMF-UMOA ?",
    options: ["Le dépositaire central des titres", "La banque centrale de l'UEMOA", "L'autorité de régulation des marchés financiers UEMOA", "L'association des SGI"],
    correct: 2,
    feedback: "Le AMF-UMOA (Autorité des Marchés Financiers de l'Union Monétaire Ouest-Africaine (AMF-UMOA)) est le régulateur. Il agrée les acteurs du marché, surveille les opérations et protège les investisseurs. Sans agrément AMF-UMOA, aucun intermédiaire ne peut légalement opérer."
  },
  {
    q: "Comment calcule-t-on le PER (Price-to-Earnings Ratio) ?",
    options: ["Dividende / Cours", "Cours / Bénéfice par action", "Bénéfice net / Capitalisation", "Actif net / Nombre d'actions"],
    correct: 1,
    feedback: "PER = Cours de l'action / Bénéfice par action. Il mesure combien de fois les bénéfices sont intégrés dans le prix. Un PER de 8x signifie que vous payez 8 années de bénéfices au prix actuel."
  },
  {
    q: "Quelle est la différence entre le BRVM Composite et le BRVM 30 ?",
    options: ["Le BRVM 30 inclut les 30 premières sociétés par capitalisation", "Le BRVM Composite regroupe les 30 valeurs les plus échangées, le BRVM 30 toutes les valeurs", "Le BRVM Composite inclut toutes les valeurs cotées, le BRVM 30 les 30 plus liquides", "Ce sont deux noms pour le même indice"],
    correct: 2,
    feedback: "Exact. Le BRVM Composite = toutes les valeurs cotées sur le marché des actions. Le BRVM 30 = les 30 valeurs les plus liquides. Le BRVM 30 est le plus suivi par les traders actifs car la liquidité garantit des prix plus fiables."
  },
  {
    q: "Qu'est-ce qu'un dividende ?",
    options: ["Un intérêt versé sur une obligation", "Une fraction des bénéfices reversée aux actionnaires", "La différence entre prix d'achat et prix de vente d'une action", "Un frais prélevé par le SGI"],
    correct: 1,
    feedback: "Le dividende est la part des bénéfices qu'une société choisit de redistribuer à ses actionnaires. Ce n'est pas automatique — c'est décidé en Assemblée Générale. Une société peut préférer réinvestir ses bénéfices plutôt que les distribuer."
  },
  {
    q: "Pour acheter des actions sur la BRVM, un investisseur particulier doit obligatoirement passer par :",
    options: ["La BRVM directement via son site web", "Une Société de Gestion et d'Intermédiation (SGI) agréée", "La banque centrale BCEAO", "N'importe quelle banque commerciale"],
    correct: 1,
    feedback: "Vous DEVEZ passer par une SGI agréée par le AMF-UMOA. Ce sont les seuls intermédiaires habilités à accéder au marché BRVM. Aucune autre entité — même une banque commerciale sans agrément SGI — ne peut légalement transmettre vos ordres."
  },
  {
    q: "Qu'est-ce que la capitalisation boursière d'une société ?",
    options: ["Son actif total selon le bilan comptable", "Ses bénéfices cumulés depuis sa création", "Cours de l'action × Nombre total d'actions en circulation", "La valeur de ses immobilisations corporelles"],
    correct: 2,
    feedback: "Capitalisation boursière = Cours × Nombre d'actions. C'est la valeur que le marché attribue à la société à l'instant T. Elle peut diverger significativement de la valeur comptable — c'est toute la question de la valorisation."
  },
  {
    q: "Lequel de ces biais cognitifs pousse un investisseur à conserver trop longtemps un titre en perte ?",
    options: ["L'excès de confiance", "Le biais de récence", "L'aversion à la perte", "Le biais de confirmation"],
    correct: 2,
    feedback: "L'aversion à la perte. Vendre un titre perdant 'officialise' la perte — psychologiquement douloureux. Donc on attend, on espère, parfois trop longtemps. La règle : la perte est réelle dès qu'elle existe sur le marché, qu'elle soit réalisée ou non."
  },
  {
    q: "Dans une thèse d'investissement solide, quel élément est indispensable ?",
    options: ["Un historique de cours sur 20 ans", "L'identification des risques qui rendraient la thèse fausse", "Un accès aux informations confidentielles de la société", "La recommandation d'un analyste broker"],
    correct: 1,
    feedback: "Identifier les risques qui invalideraient votre thèse est la marque d'une pensée rigoureuse. Une bonne thèse d'investissement ne dit pas seulement pourquoi un titre va monter — elle définit aussi à quelles conditions vous auriez tort, et quand vous sortirez."
  }
];

let currentQ = 0;
let score = 0;
let answered = false;

function initQuiz() {
  const progress = document.getElementById('quizProgress');
  progress.innerHTML = '';
  for (let i = 0; i < quizData.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
    dot.id = 'dot' + i;
    progress.appendChild(dot);
  }
  renderQuestion();
}

function renderQuestion() {
  const q = quizData[currentQ];
  document.getElementById('qNum').textContent = `QUESTION ${String(currentQ + 1).padStart(2, '0')} / ${quizData.length}`;
  document.getElementById('qText').textContent = q.q;
  const opts = document.getElementById('qOptions');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => selectOption(i);
    opts.appendChild(btn);
  });
  document.getElementById('qFeedback').className = 'quiz-feedback';
  document.getElementById('qFeedback').textContent = '';
  document.getElementById('qNext').className = 'quiz-next';
  answered = false;
}

function selectOption(idx) {
  if (answered) return;
  answered = true;
  const q = quizData[currentQ];
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);
  buttons[idx].classList.add(idx === q.correct ? 'correct' : 'wrong');
  if (idx !== q.correct) buttons[q.correct].classList.add('correct');
  const fb = document.getElementById('qFeedback');
  fb.textContent = (idx === q.correct ? '✓ Correct — ' : '✗ Incorrect — ') + q.feedback;
  fb.className = 'quiz-feedback show ' + (idx === q.correct ? 'correct' : 'wrong');
  if (idx === q.correct) score++;
  document.getElementById('qNext').className = 'quiz-next show';
  document.getElementById('dot' + currentQ).classList.add(idx === q.correct ? 'done' : 'active');
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizData.length) {
    showResult();
    return;
  }
  if (currentQ < quizData.length) {
    document.getElementById('dot' + currentQ).classList.add('active');
  }
  renderQuestion();
}

function showResult() {
  document.getElementById('quizContent').style.display = 'none';
  document.getElementById('quizResult').className = 'quiz-result show';
  document.getElementById('resultScore').textContent = score + '/' + quizData.length;
  const pct = score / quizData.length;
  let msg;
  if (pct >= 0.9) msg = "Excellent. Vous maîtrisez les fondamentaux de la BRVM. Passez aux modules avancés.";
  else if (pct >= 0.7) msg = "Bon résultat. Quelques points à consolider — relisez les modules sur les thèmes où vous avez hésité.";
  else if (pct >= 0.5) msg = "Base solide mais des lacunes à combler. Reprenez les modules 2 à 4 en priorité.";
  else msg = "Retournez aux fondamentaux. Relisez les modules 1 à 3 attentivement avant de retenter.";
  document.getElementById('resultMsg').textContent = msg;
}

function restartQuiz() {
  currentQ = 0;
  score = 0;
  answered = false;
  document.getElementById('quizContent').style.display = 'block';
  document.getElementById('quizResult').className = 'quiz-result';
  initQuiz();
}

// ---- LESSONS MODAL ----
function openLesson(key) {
  if (!lessons[key]) return;
  const l = lessons[key];
  document.getElementById('modalLabel').textContent = l.module;
  document.getElementById('modalTitle').textContent = l.title;
  document.getElementById('modalBody').innerHTML = l.content;
  document.getElementById('lessonModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('lessonModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('lessonModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ---- VIDEO LINKS ----
function openVideo(url) {
  window.open(url, '_blank');
}

// ---- SCROLL UTILS ----
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---- INIT ----
initQuiz();
