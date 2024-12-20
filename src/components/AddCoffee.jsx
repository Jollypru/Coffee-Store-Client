import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-bold text-center'>Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" id="" placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" id="" placeholder='Available Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" id="" placeholder='Supplier Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" id="" placeholder='Taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" id="" placeholder='Category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" id="" placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form photo URL  row */}
                <div className=''>
                    <div className="form-control w-full mb-5">
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" id="" placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block bg-slate-800 text-white' />
            </form>
        </div>
    );
};

export default AddCoffee;