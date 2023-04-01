import { useAccount, useEnsName } from "wagmi";

export function ENComponent() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div className="Legal">
      <h1>Legal Disclaimer</h1>

      <p>
        {`
        This GitHub repository ("Repository") is provided as is, without warranty
         of any kind, express or implied, including but not limited to the warranties
          of merchantability, fitness for a particular purpose and noninfringement.`}
      </p>
      <p>
        The owner of the Repository and the contributors to the Repository shall
        not be liable for any claim, damages or other liability, whether in an
        action of contract, tort or otherwise, arising from, out of or in
        connection with the use or inability to use this Repository or any
        material, code or information contained in this Repository, including
        but not limited to direct, indirect, incidental, punitive or
        consequential damages.
      </p>
      <p>
        The user of the Repository is responsible for compliance with all
        applicable laws and regulations. The use of any material, code or
        information contained in this Repository is the sole responsibility of
        the user and the owner of the Repository and the contributors to the
        Repository shall not be held liable for any damages, losses or legal
        issues that may arise from the misuse of the content within the
        Repository.
      </p>
      <p>
        The user of the Repository acknowledges and agrees that they will be
        responsible for any charges or penalties related to the misuse of this
        Repository or any material, code or information contained in this
        Repository.
      </p>
      <p>
        The user of the Repository acknowledges and agrees that the purpose of
        this Repository and its content is solely educational and academic and
        is provided only to understand mathematical and privacy concepts. The
        owner of the Repository and the contributors to the Repository do not
        intend to encourage or support any misuse of the content in this
        Repository in any way.
      </p>
      <p>
        By using this Repository, the user acknowledges and agrees that they
        have read this legal disclaimer and understand and agree to its terms.
      </p>
    </div>
  );
}
