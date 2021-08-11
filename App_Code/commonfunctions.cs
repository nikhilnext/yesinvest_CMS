using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for commonfunction
/// </summary>
public class commonfunction
{

    public static string conn = System.Configuration.ConfigurationManager.ConnectionStrings["dbStringnew"].ConnectionString;
    public commonfunction()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public class obj_token
    {
        public string status { get; set; }
    }


    public static void WriteLog(string FunctionName, string Parameters, DateTime Start, DateTime End, string Message = "")
    {
        DateTime TimeStamp = DateTime.UtcNow;
        try
        {
            TimeSpan duration = Start - End;
            string strPath = "~/YesInvest_Logs";
            if (!Directory.Exists(HttpContext.Current.Server.MapPath(strPath)))
            {
                Directory.CreateDirectory(HttpContext.Current.Server.MapPath(strPath));
            }
            strPath = strPath + "/Logs_" + DateTime.Now.ToString("yyyy_MM");
            if (!Directory.Exists(HttpContext.Current.Server.MapPath(strPath)))
            {
                Directory.CreateDirectory(HttpContext.Current.Server.MapPath(strPath));
            }
            strPath = strPath + "/LOG_" + DateTime.Now.ToString("yyyy_MM_dd") + ".txt";

            string strLog = string.Format("LogTime :- {0}\r\nFunation_Name : {1}\r\nParameters : {2}\r\nStart Time : {3}\r\nEnd : {4}\r\nDuration : {5}\r\nMessage : {6}\r\n\r\n\r\n", DateTime.Now, FunctionName, Parameters, Start, End, duration, Message);
            File.AppendAllText(HttpContext.Current.Server.MapPath(strPath), strLog);


        }
        catch (Exception)
        {
            //throw exp;
        }
    }

    public static string CheckCMS_Sesion(string userid)
    {
        string result = string.Empty;
        try
        {
            using (SqlConnection con = new SqlConnection(conn))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = con;
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.CommandText = "dbo.CMS_tokencheck";    //CMS_tokencheck
                  //  cmd.CommandText = "dbo.CMS_CheckUserSession"; //[dbo].[CMS_CheckUserSession]
                    cmd.Parameters.AddWithValue("@userid", SqlDbType.VarChar).Value = userid;


                    //using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    //{

                    //    DataSet ds = new DataSet();
                    //    adapter.Fill(ds);
                    //    result = JsonConvert.SerializeObject(ds);
                    //}

                    using (SqlDataAdapter adapter = new SqlDataAdapter(cmd))
                    {

                        DataSet ds = new DataSet();
                        adapter.Fill(ds);

                        //if (ds.Tables.Count > 0)
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            result = ds.Tables[0].Rows[0][0].ToString();
                            //if (result != "true")
                            //{
                            //    result = "";
                            //   // result = JsonConvert.SerializeObject(result);

                            //}
                        }

                        // result = JsonConvert.SerializeObject(ds);

                    }
                }
            }

        }
        catch (Exception ex)
        {
            commonfunction.WriteLog("CheckCMS_Sesion commonFunnction exception", ex.ToString(), DateTime.Now, DateTime.Now);
            return "Error 404";
        }
        return result;
        // return "";
    }
}