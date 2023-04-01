import { useAccount, useEnsName } from "wagmi";

export function FRComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="Legal">
      <h1>Clause de non-responsabilité légale</h1>

      <p>
        {`Ce dépôt GitHub ("Dépôt") est fourni tel quel, sans garantie d'aucune
        sorte, expresse ou implicite, y compris, mais sans s'y limiter, les
        garanties de qualité marchande, d'adéquation à un usage particulier et
        de non-violation.`}
      </p>
      <p>
        {`
        Le propriétaire du Dépôt et les contributeurs au Dépôt ne seront pas
        responsables envers toute personne ou entité pour toute perte ou dommage
        découlant de l'utilisation de ce Dépôt ou de tout contenu ou information
        fourni dans celui-ci, y compris, sans limitation, les dommages directs
        ou indirects, accessoires, consécutifs ou punitifs.`}
      </p>
      <p>
        {`
        L'utilisateur du Dépôt est responsable de se conformer à toutes les lois
        et réglementations applicables. L'utilisation de tout matériel, code ou
        information contenu dans ce Dépôt est la responsabilité exclusive de
        l'utilisateur et le propriétaire du Dépôt et les contributeurs au Dépôt
        ne peuvent être tenus responsables des dommages, pertes ou problèmes
        juridiques qui pourraient survenir d'une utilisation abusive du contenu
        du Dépôt.`}
      </p>
      <p>
        {`
        L'utilisateur du Dépôt accepte d'être responsable de toutes les charges
        ou pénalités relatives à une utilisation abusive de ce Dépôt ou de tout
        contenu ou information fourni dans celui-ci.`}
      </p>
      <p>
        {`
        L'utilisateur du Dépôt reconnaît et accepte que le but du Dépôt et de
        son contenu est purement éducatif et académique, et qu'il est fourni
        uniquement pour comprendre des concepts mathématiques et de
        confidentialité. Le propriétaire du Dépôt et les contributeurs au Dépôt
        n'ont pas l'intention d'encourager ou de soutenir de quelque manière que
        ce soit une utilisation abusive du contenu de ce Dépôt.`}
      </p>
      <p>
        {`
        En utilisant ce Dépôt, l'utilisateur reconnaît et accepte avoir lu cette
        clause de non-responsabilité légale, et comprend et accepte ses termes.`}
      </p>
    </div>
  );
}
