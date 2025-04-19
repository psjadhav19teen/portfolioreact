const Project=()=>(
<section  className="container p-10 bg-grey-100 text-center">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Project
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-1</h3>
                    <p>Ecommerce Flipkart does online shopping & delivery of products.</p>
                </div>

                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-2</h3>
                    <p>eLibrary does online issueing and reading books.</p>
                </div>

                <div className="p-4 bg-white shadow rounded">
                    <h3 className="font-semibold">Project-3</h3>
                    <p>PetStore does online adopt or donate pets.</p>
                </div>
                
            </div>
        </div>
    </section>
)

export default Project;