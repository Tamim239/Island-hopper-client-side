import { useQuery } from "@tanstack/react-query"

export const UseImages = () => {
 
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['images'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/images');
            const data = await res.json();
            return data;
        }
    })
    return {data, isLoading, refetch}
}
