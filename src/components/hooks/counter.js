import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { utilities } from '../../utilities/utilities';

function Counter(props, ref) {
    const [count, setCount] = useState(1);
    useEffect(() => {
        if(count != 1){
            utilities.notify.success("Update success");
        }
    });

    useImperativeHandle(ref,
        () => ({
            increase() {
                setCount(count + 1);
            }
        })
        // which means that the effect function should be called once: after the first mount/render only.
        //}), []
    );

    return (
        <div class="row">
            <div class="form-group col-md-12">
                <label for="exampleInputPassword1">Count</label>
                <input type="text" class="form-control" value={count} />
            </div>
        </div>
    )
};

export default forwardRef(Counter)