import { useAccount, useEnsName } from "wagmi";

export function ESComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="Legal">
      <h1>Descargo de responsabilidad legal</h1>

      <p>
        {`Este repositorio de GitHub ("Repositorio") es proporcionado tal cual,
        sin garantía de ninguna clase, expresa o implícita, incluyendo pero no
        limitado a garantías de comerciabilidad, idoneidad para un propósito
        particular y no infracción.`}
      </p>
      <p>
        El propietario del Repositorio y los contribuyentes al Repositorio no
        serán responsables ante ninguna persona o entidad por cualquier pérdida
        o daño que surja del uso de este Repositorio o de cualquier contenido o
        información proporcionada en el mismo, incluyendo, sin limitación, daños
        directos o indirectos, incidentales, consecuentes o punitivos.
      </p>
      <p>
        El usuario del Repositorio es responsable de cumplir con todas las leyes
        y regulaciones aplicables. El uso de cualquier material, código o
        información contenida en este Repositorio es responsabilidad exclusiva
        del usuario y el propietario del Repositorio y los contribuyentes al
        Repositorio no pueden ser considerados responsables de los daños,
        pérdidas o problemas legales que puedan surgir del uso indebido del
        contenido dentro del Repositorio.
      </p>
      <p>
        El usuario del Repositorio acepta que será responsable de cualquier
        cargo o penalización relacionada con el mal uso de este Repositorio o de
        cualquier contenido o información proporcionada en el mismo.
      </p>
      <p>
        El usuario del Repositorio acepta y reconoce que el propósito del
        Repositorio y su contenido es meramente educativo y académico, y que se
        proporciona únicamente para entender conceptos matemáticos y de
        privacidad. El propietario del Repositorio y los contribuyentes al
        Repositorio no tienen la intención de fomentar ni apoyar el mal uso del
        contenido en este Repositorio de ninguna manera.
      </p>
      <p>
        Al utilizar este Repositorio, el usuario acepta y reconoce que ha leído
        este descargo de responsabilidad legal y comprende y acepta sus
        términos.
      </p>
    </div>
  );
}
