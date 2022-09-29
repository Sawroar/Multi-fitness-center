import React from 'react';

const Modal = () => {
    return (
        <div>

            <button className='btn btn-primary w-100 mt-5' id='liveToastBtn' data-toggle="modal" data-target="#exampleModal">Activity Completed</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Registration information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you ready to give your information?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Yes I do</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;