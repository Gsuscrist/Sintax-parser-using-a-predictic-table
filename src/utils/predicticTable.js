
export const predicticTable= {
    "SNT":[ "var", "TD", "{", "}", "()", "word", "takeData", "="],
    "S": [ null, null, ["I", "V", "F"], null, null, null, null, null ],
    "I": [ null, null, ["{"], null, null, null, null, null ],
    "V": [ ["var","T","G"], null, null, null, null, null, null, null ],
    "T": [ null, ["TD"], null, null, null, null, null, null ],
    "G": [ null, null, null, null, null, ["N","=","O"], null, null ],
    "N": [ null, null, null, null, null, ["word"], null, null ],
    "R": [ null, null, null, null, null, ["word"], null, ["word"] ],
    "O": [ null, null, null, null, null, null, ["takeData", "P"], null ],
    "P": [ null, null, null, null, ["(",")"], null, null, null ],
    "F": [ null, null, null, ["}"], null, null, null, null ],
    "L": [ null, null, null, null, null, ["word"], null, null ],
}