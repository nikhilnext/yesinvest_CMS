using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class CMS_Fileupload : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    [WebMethod(EnableSession = true)]
    public static string CMS_GetAllFiles(string filetype)
    {
        string response = string.Empty;
        string DealJson = string.Empty;


        try
        {
            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_AllFiles";
                    cmd.Parameters.AddWithValue("@filetype", SqlDbType.VarChar).Value = filetype;
                   


                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {

                        DataSet ds = new DataSet();
                        adapter.Fill(ds);
                        DealJson = JsonConvert.SerializeObject(ds);
                    }
                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CMS_GetAllFiles exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return DealJson;
    }

    [WebMethod(EnableSession = true)]
    public static string CMS_Upload_File(string filename, string filetype, string filepath, string category, string userid)
    {

       // commonfunction.obj_token obj = new commonfunction.obj_token();
        // check user session 

        string response = string.Empty;
        string DealJson = string.Empty;


        try
        {

            string session = commonfunction.CheckCMS_Sesion(userid);
            if (session != "true")
            {
                return "unuthorized";
            }

            using (SqlConnection con = new SqlConnection(commonfunction.conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_InsertFile";
                     
                    cmd.Parameters.AddWithValue("@filename", SqlDbType.VarChar).Value = filename;
                    cmd.Parameters.AddWithValue("@filetype", SqlDbType.VarChar).Value = filetype;
                    cmd.Parameters.AddWithValue("@filepath", SqlDbType.VarChar).Value = filepath;
                    cmd.Parameters.AddWithValue("@category", SqlDbType.VarChar).Value = category;
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = userid;

                    con.Open();
                    int k = cmd.ExecuteNonQuery();
                    con.Close();
                    if (k > 0)
                    {
                        response = "success";
                    }
                    else
                    {
                        response = "error";

                    }
                }





            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CMS_Upload_File exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return response;
    }



}