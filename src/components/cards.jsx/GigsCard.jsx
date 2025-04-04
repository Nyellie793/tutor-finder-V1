import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GigActions from "../GigsDashboard/GigsAction";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useApi } from "@/utils/fetcher";




const GigCard = ({ gig , showPublish = true}) => {
  const navigate = useNavigate();
  const [isPublished, setIsPublished] = useState(gig.isPublished || false);
  const [showUnpublishDialog, setShowUnpublishDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { API } = useApi();

  // Status badge styling based on status
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-300";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };
  const handleCardClick = () => {
    navigate(`/learner-dashboard/gigs/${gig.id}`);
  };
  const handleDeleteGig = (id) => {
    // delete logic here
    console.log("Deleting gig with ID:", id);
  };

 const handlePublishToggle = async (e) => {
   e.stopPropagation();

   if (isPublished) {
     setShowUnpublishDialog(true);
   } else {
     try {
       // Set loading state
       setIsLoading(true);
       const token = localStorage.getItem("auth_token");

       if (!token) {
         throw new Error("User unauthenticated");
       }

       console.log("Publishing gig with ID:", gig.id);
       // Use the fixed API function with PATCH method
       const response = await API.PublishGig(gig.id, token);
       console.log("Publish response:", response);

       // Update UI state on success
       setIsPublished(true);
     } catch (error) {
       console.error("Error publishing gig:", error);
       // Show error to user (you might want to add a toast notification here)
       alert(`Failed to publish gig: ${error.message}`);
     } finally {
       setIsLoading(false);
     }
   }
 };

 // Also update the confirmUnpublish function to use the API
 const confirmUnpublish = async () => {
   setIsLoading(true);
   setShowUnpublishDialog(false);

   try {
     const token = localStorage.getItem("auth_token");

     if (!token) {
       throw new Error("User unauthenticated");
     }

     console.log("Unpublishing gig with ID:", gig.id);
     const response = await API.UnpublishGig(gig.id, token);
     console.log("Unpublish response:", response);

     // Update UI state on success
     setIsPublished(false);
   } catch (error) {
     console.error("Error unpublishing gig:", error);
     alert(`Failed to unpublish gig: ${error.message}`);
     // Revert UI state since operation failed
     setIsPublished(true);
   } finally {
     setIsLoading(false);
   }
 };



  const handleActionsClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-sm transition-all duration-300 p-4 pb-2 cursor-pointer"
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-2">{gig.title}</h3>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={getStatusBadgeStyle(gig.status)}
              >
                {gig.status}
              </Badge>
              <div onClick={handleActionsClick}>
                <GigActions
                  gigId={gig.id}
                  onDelete={handleDeleteGig}
                  gigTitle={gig.title}
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {gig.description}
          </p>
          <div className="flex justify-between items-center">
            <Badge
              variant="outline"
              className="bg-[var(--light-blue)] bg-opacity-10 text-[var(--teal)] border-[var(--light-blue)]"
            >
              Category {gig.category_id}
            </Badge>
            <div className="text-[var(--teal)] font-medium">
              {formatPrice(gig.budget)}
            </div>
          </div>
        </CardContent>
        <CardFooter className="py-3 border-t bg-gray-50">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Location: {gig.location}
            </div>
            {showPublish && (
              <Button
                size="sm"
                onClick={handlePublishToggle}
                disabled={isLoading}
                className={
                  isPublished
                    ? "bg-amber-500 hover:bg-amber-600"
                    : "bg-[#0097a7] hover:bg-[#0097a7]/50"
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {isPublished ? "Unpublishing..." : "Publishing..."}
                  </>
                ) : isPublished ? (
                  "Unpublish"
                ) : (
                  "Publish"
                )}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
      {/* Unpublish Confirmation Dialog */}
      <AlertDialog
        open={showUnpublishDialog}
        onOpenChange={setShowUnpublishDialog}
      >
        <AlertDialogContent className="bg-neutral-50">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will unpublish this gig.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmUnpublish}
              className="bg-blue-400 text-white hover:bg-blue-400 hover:opacity-75"
            >
              Unpublish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default GigCard;
