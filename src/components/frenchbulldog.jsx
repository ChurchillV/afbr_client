import Breeds from "./breeds"
import frenchbulldog from '../images/frenchbulldog1.png'


export const FrenchBulldog = () => {
    return (
            <div className="container">
                <div className='row  text-left align-items-center justify-content-center'>
                    <div className="col-lg-12">
                        <h1>French BullDog</h1>
                        <img src={frenchbulldog}  className='img-fluid w-50' alt="" />
                        <h4 className='text-left'> General Appearance </h4>
                        <p>
                            The French Bulldog has the appearance of an active, intelligent, muscular dog of heavy bone, smooth coat, compactly built, and of medium or small structure. Expression alert, curious, and interested.

                        </p>

                        <h6>  Proportion and Symmetry</h6>
                        <p> All points are well distributed and bear good relation one to the other; no feature being in such prominence from either excess or lack of quality that the animal appears poorly proportioned.
                        </p>
                        <h6> Influence of Sex</h6>
                        <p>
                            In comparing specimens of different sex, due allowance is to be made in favor of bitches, which do not bear the characteristics of the breed to the same marked degree as do the dogs.


                        </p>
                        <h6>  Size, Proportion, Substance</h6>
                        <p>

                            Weight not to exceed 30 pounds. Proportion–Distance from withers to ground in good relation to distance from withers to onset of tail, so that animal appears compact, well balanced and in good proportion. Substance–Muscular, heavy bone.


                        </p>

                    </div>
                </div>
            </div>

    )

}