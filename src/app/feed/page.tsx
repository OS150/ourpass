export default function Feed() {
  return (
    <main>
      <div data-theme='light'>
        <div className='flex flex-row justify-between margin m-5'>
          <h1 className='font-bold text-4xl p-2'>My Subscriptions</h1>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Logout</button>
        </div>
        <button className="btn btn-primary m-5">Add A Subscription</button>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th>Subscription Name</th>
                <th>Information</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Pret A Manger Subscription</div>
                      <div className="text-sm opacity-50">Joey Cheng</div>
                    </div>
                  </div>
                </td>
                <td>
                  Use Once Every 30 Minutes
                  <br />
                  <span className="badge badge-ghost badge-sm">In Use</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">edit</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">HBO Max</div>
                      <div className="text-sm opacity-50">Ian MacDougald</div>
                    </div>
                  </div>
                </td>
                <td>
                  Up to 6 Users
                  <br />
                  <span className="badge badge-ghost badge-sm">Available</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">edit</button>
                </th>
              </tr>
            </tbody>


          </table>
        </div>
      </div>
    </main>
  )
}