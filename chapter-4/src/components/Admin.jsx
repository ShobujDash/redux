import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from "../api/adminSlice";


function Admin() {
  const { data, error, isLoading,isSuccess } = useGetAccountsQuery()
  const [addAccount] = useAddAccountMutation()
  const [deleteAccount] = useDeleteAccountMutation()
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        {isLoading ? <p>Loading..</p>:null}
        {isSuccess &&
          data.map((accouts, index) => (
            <p key={index}>
              {accouts.id}:{accouts.amount}
              <button onClick={() => deleteAccount(accouts.id)}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccount({ id: accouts.id, amount: 777 })}
              >
                Update Account
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account +
        </button>
      </div>
    </div>
  );
}

export default Admin;
